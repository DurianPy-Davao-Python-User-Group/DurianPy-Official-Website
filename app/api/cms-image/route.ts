import { NextRequest, NextResponse } from 'next/server';

const MAX_REDIRECTS = 5;

function getCmsOrigin() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.PAYLOAD_GRAPHQL_ENDPOINT;

  if (!configuredUrl) {
    return null;
  }

  return new URL(configuredUrl).origin;
}

function validateCmsImageUrl(value: string, cmsOrigin: string) {
  const url = new URL(value);

  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.origin !== cmsOrigin ||
    url.username ||
    url.password
  ) {
    throw new Error('Invalid CMS image URL');
  }

  // Restrict requests to CMS-hosted media assets only.
  // This prevents user-controlled targeting of arbitrary CMS endpoints.
  if (!url.pathname.startsWith('/media/')) {
    throw new Error('Invalid CMS image URL');
  }

  // Disallow query/hash to avoid user-controlled parameterization of upstream requests.
  if (url.search || url.hash) {
    throw new Error('Invalid CMS image URL');
  }

  return url;
}

export async function GET(request: NextRequest) {
  const cmsOrigin = getCmsOrigin();
  const apiKey = process.env.PAYLOAD_API_KEY;
  const requestedUrl = request.nextUrl.searchParams.get('url');

  if (!cmsOrigin || !apiKey) {
    return NextResponse.json(
      { error: 'CMS image proxy is not configured' },
      { status: 500 }
    );
  }

  if (!requestedUrl) {
    return NextResponse.json(
      { error: 'Image URL is required' },
      { status: 400 }
    );
  }

  try {
    let imageUrl = validateCmsImageUrl(requestedUrl, cmsOrigin);

    for (
      let redirectCount = 0;
      redirectCount <= MAX_REDIRECTS;
      redirectCount += 1
    ) {
      const response = await fetch(imageUrl, {
        headers: {
          Authorization: `service-accounts API-Key ${apiKey}`,
        },
        redirect: 'manual',
        cache: 'no-store',
      });

      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get('location');
        if (!location || redirectCount === MAX_REDIRECTS) {
          throw new Error('Invalid CMS image redirect');
        }

        imageUrl = validateCmsImageUrl(
          new URL(location, imageUrl).href,
          cmsOrigin
        );
        continue;
      }

      if (!response.ok) {
        return NextResponse.json(
          { error: 'CMS image request failed' },
          { status: response.status }
        );
      }

      const responseContentType = response.headers.get('content-type');
      const contentType =
        responseContentType?.split(';', 1)[0].trim().toLowerCase() || '';
      const isSvg = imageUrl.pathname.toLowerCase().endsWith('.svg');

      // Trust the .svg extension for files served from the validated CMS
      // origin — local/dev media servers often send a missing or incorrect
      // content-type header for SVGs, so we don't rely on whitelisting every
      // possible upstream value.
      if (isSvg) {
        return new NextResponse(response.body, {
          headers: {
            'Cache-Control':
              'public, max-age=31536000, s-maxage=31536000, immutable',
            'Content-Type': 'image/svg+xml',
            'X-Content-Type-Options': 'nosniff',
          },
        });
      }

      if (!contentType.startsWith('image/')) {
        return NextResponse.json(
          { error: 'CMS response is not an image' },
          { status: 415 }
        );
      }

      return new NextResponse(response.body, {
        headers: {
          'Cache-Control':
            'public, max-age=31536000, s-maxage=31536000, immutable',
          'Content-Type': contentType,
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid CMS image URL' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'CMS image request failed' },
    { status: 502 }
  );
}
