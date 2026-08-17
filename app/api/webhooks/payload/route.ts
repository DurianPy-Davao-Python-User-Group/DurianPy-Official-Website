import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { CMS_CACHE_TAGS } from '@/lib/graphql/cache';

interface PayloadWebhookBody {
  collection?: string;
  operation?: string;
}

const COLLECTION_TO_TAGS: Record<string, string[]> = {
  events: [CMS_CACHE_TAGS.home, CMS_CACHE_TAGS.events],
  partners: [CMS_CACHE_TAGS.home, CMS_CACHE_TAGS.partners],
  sponsors: [CMS_CACHE_TAGS.home, CMS_CACHE_TAGS.sponsors],
};

function isAllowedOperation(operation: string | undefined) {
  return operation === 'create' || operation === 'update' || operation === 'delete';
}

function isAuthorized(request: Request) {
  const secret = process.env.PAYLOAD_REVALIDATE_SECRET; // maybe naother way of authorization don't know need consult with leads

  if (!secret) {
    return true;
  }

  const headerSecret = request.headers.get('x-payload-secret');
  const url = new URL(request.url);
  const querySecret = url.searchParams.get('secret');

  return headerSecret === secret || querySecret === secret;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let body: PayloadWebhookBody;

  try {
    body = (await request.json()) as PayloadWebhookBody;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!isAllowedOperation(body.operation)) {
    return NextResponse.json({ ok: false, error: 'Unsupported operation' }, { status: 400 });
  }

  const tags = COLLECTION_TO_TAGS[body.collection ?? ''] ?? [CMS_CACHE_TAGS.home];

  for (const tag of tags) {
    revalidateTag(tag);
  }

  revalidatePath('/');

  return NextResponse.json({
    ok: true,
    operation: body.operation,
    collection: body.collection ?? null,
    tags,
    path: '/',
  });
}
