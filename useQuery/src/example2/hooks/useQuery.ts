import { useCallback, useEffect, useState } from 'react';

import { Cache } from '@/example2/utils/cache.ts';

export function useQuery<T>(fetcher: () => Promise<T>, { queryKey, ...option }: UseQueryOption<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();
  const { enabled = true } = option;

  const [cache] = useState(new Cache<string, T>());
  const 쿼리키 = JSON.stringify(queryKey);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetcher();
      setData(data);
      cache.set(쿼리키, data);
      option.onSuccess && option.onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
      option.onError && option.onError(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    if (!enabled) return;
    if (cache.has(쿼리키)) return;

    fetch();
  }, [enabled, 쿼리키]);

  const cachedData = cache.get(쿼리키);
  return {
    isLoading: isLoading,
    data: cachedData ?? data,
    error,
  };
}

type UseQueryOption<T> = {
  queryKey: unknown[];
  enabled?: boolean;
  onSuccess?: (data?: T) => void;
  onError?: (error?: unknown) => void;
};
