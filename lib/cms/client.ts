import axios from 'axios';
import { draftMode } from 'next/headers';

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const DRAFT_TOKEN = process.env.CMS_DRAFT_SECRET_TOKEN;

export async function cmsFetch<T>(
  path: string,
  options: {
    headers?: Record<string, string>;
    params?: Record<string, string | number | boolean>;
  } = {}
): Promise<T> {
  const { isEnabled } = await draftMode();

  const params = { ...options.params };
  const headers: Record<string, string> = { ...options.headers };

  if (isEnabled) {
    params.draft = 'true';
    headers['Authorization'] = `Bearer ${DRAFT_TOKEN}`;
  }

  try {
    const res = await axios.get<T>(`${CMS_URL}${path}`, {
      headers,
      params,
      // drafts should never be cached; Next's fetch cache doesn't apply to axios,
      // so disable HTTP caching explicitly when in draft mode
      ...(isEnabled
        ? { headers: { ...headers, 'Cache-Control': 'no-store' } }
        : {}),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(`CMS fetch failed: ${err.response?.status} ${path}`);
    }
    throw err;
  }
}
