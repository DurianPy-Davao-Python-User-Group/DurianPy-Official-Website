import axios from 'axios';
import { draftMode } from 'next/headers';
import { cmsFetch } from '../lib/cms/client';
import { jest } from '@jest/globals';
import { describe, it, expect } from '@jest/globals';

jest.mock('next/headers', () => ({
  draftMode: jest.fn(),
}));

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    isAxiosError: jest.fn(),
  },
}));

const mockedDraftMode = draftMode as jest.MockedFunction<typeof draftMode>;
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('cmsFetch health check', () => {
  it('fetches data successfully when draft mode is disabled', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: false } as any);
    mockedAxios.get.mockResolvedValue({ data: { ok: true } });

    const result = await cmsFetch<{ ok: boolean }>('/health');

    expect(result).toEqual({ ok: true });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('/health'),
      expect.objectContaining({ params: {} })
    );
  });

  it('adds auth header and draft param when draft mode is enabled', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: true } as any);
    mockedAxios.get.mockResolvedValue({ data: { ok: true } });

    await cmsFetch('/health');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        params: expect.objectContaining({ draft: 'true' }),
        headers: expect.objectContaining({
          Authorization: expect.stringContaining('Bearer'),
        }),
      })
    );
  });

  it('throws a descriptive error when the request fails', async () => {
    mockedDraftMode.mockResolvedValue({ isEnabled: false } as any);
    mockedAxios.isAxiosError.mockReturnValue(true);
    mockedAxios.get.mockRejectedValue({
      response: { status: 500 },
    });

    await expect(cmsFetch('/health')).rejects.toThrow(
      'CMS fetch failed: 500 /health'
    );
  });
});
