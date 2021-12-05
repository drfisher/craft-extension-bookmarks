import { AppState } from '@src/types';

export const getDefaultState = (): AppState => {
  return {
    appVersion: 1,
    bookmarks: { groups: [], items: [] },
  };
};

export const log = function (...args: unknown[]): void {
  window.console.log('[Craft Bookmarks]', ...args);
};

export const logError = function (...args: unknown[]): void {
  window.console.error('[Craft Bookmarks]', ...args);
};

export function safeJsonParse<T>(jsonStr: string | null | undefined): T | null {
  if (jsonStr == null || jsonStr === '') {
    return null;
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    const message = e instanceof Error ? e.message : null;
    logError('JsonSyntaxError', message);
    return null;
  }
}
