// __tests__/cms.test.ts
import { draftMode } from 'next/headers';
import { cmsFetch } from '../lib/cms/client';
import { jest } from '@jest/globals';
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';

jest.mock('next/headers', () => ({
  draftMode: jest.fn(),
}));

const mockedDraftMode = draftMode as jest.MockedFunction<typeof draftMode>;

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as any;

describe('cmsFetch health check', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_CMS_URL = 'https://test-cms.example.com';
    process.env.CMS_DRAFT_SECRET_TOKEN = 'test-token';
    mockFetch.mockReset();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully when draft mode is disabled', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: false } as any);
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({ ok: true }),
    });

    const result = await cmsFetch<{ ok: boolean }>('/health');

    expect(result).toEqual({ ok: true });

    const [calledUrl, calledOptions] = mockFetch.mock.calls[0];
    expect(calledUrl).toContain('/health');
    expect(calledOptions.headers['Authorization']).toBeUndefined();
  });

  it('adds auth header and draft param when draft mode is enabled', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: true } as any);
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({ ok: true }),
    });

    await cmsFetch('/health');

    const [calledUrl, calledOptions] = mockFetch.mock.calls[0];
    expect(calledUrl).toContain('draft=true');
    expect(calledOptions.headers['Authorization']).toBe('Bearer test-token');
  });

  it('throws a descriptive error when the request fails', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: false } as any);
    mockFetch.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({}),
    });

    await expect(cmsFetch('/health')).rejects.toThrow(/CMS fetch failed/);
  });

  it('throws a descriptive error on network failure', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: false } as any);
    mockFetch.mockRejectedValue(new Error('Network error'));

    await expect(cmsFetch('/health')).rejects.toThrow(/CMS fetch failed/);
  });
});
