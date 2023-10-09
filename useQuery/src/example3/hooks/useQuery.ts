import { useCallback, useEffect, useState } from 'react';

import { Cache } from '../utils/cache';
import { promiseWrapper } from '../utils/promiseWrapper.ts';

export function useQuery<T>(fetcher: () => Promise<T>, { queryKey, ...option }: UseQueryOption<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();
  const { enabled = true, suspense = false } = option;

  const [cache] = useState(new Cache<string, T>());
  const 쿼리키 = JSON.stringify(queryKey);

  // 캐시 - 일반인 경우
  useEffect(() => {
    if (!enabled) return;
    if (cache.has(쿼리키)) return;

    fetch();
  }, [enabled, 쿼리키]);

  // suspense 관련 로직?
  useEffect(() => {
    console.log('in', 쿼리키);
    if (!suspense) return;
    if (!data) return;
    if (cache.has(쿼리키)) return;

    // GYU-TODO: 캐시 걸리는 시점이 지금 문제
    // 캐시가 적용되면 의도대로 동작하지 않음
    // cache.set(쿼리키, data);
  }, [쿼리키, data]);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (suspense) {
        // suspense 처리 로직
        const promise = fetcher();
        setData(promiseWrapper(promise));
      } else {
        // 일반 로직 - suspense 처리 로직 이 아닌 경우
        const data = await fetcher();
        setData(data);
        cache.set(쿼리키, data);
      }
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

  // const cachedData = cache.get(쿼리키);
  return {
    isLoading: isLoading,
    data,
    // data: cachedData ?? data,
    error,
  };
}

type UseQueryOption<T> = {
  queryKey: unknown[];
  enabled?: boolean;
  onSuccess?: (data?: T) => void;
  onError?: (error?: unknown) => void;
  suspense?: boolean;
};
