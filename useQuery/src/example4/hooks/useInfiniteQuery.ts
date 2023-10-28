import { useCallback, useEffect, useRef, useState } from 'react';

import { Cache } from '../utils/cache';

export function useInfiniteQuery<T>(
  fetcher: (pageIndex: number, perPage: number) => Promise<T>,
  { queryKey, ...option }: useInfiniteFetchOption<T>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const {
    enabled = true, //
    perPage = 10,
    useErrorBoundary = false,
    onSuccess,
    onError,
  } = option;

  const [cache] = useState(new Cache<string, InfiniteCache<T>>());
  const page = useRef(1);
  const 쿼리키 = JSON.stringify(queryKey);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cachedData = cache.get(쿼리키) || { data: [], pageIndex: 1, perPage };
      const data = await fetcher.apply(null, [page.current, perPage]);

      // GYU-TEST: error 테스트 - api 에러로 가정
      if (page.current === 3) {
        console.log('in');
        throw new Error('API 요청 에러');
      }
      cache.set(쿼리키, {
        // T 로 [] 로 지정할 수 있는데 이를 T 로 인식하게 했는데 타입에서 [] 로 해야 [...data] 할 수 있어 우선 ts-ignore 추가
        // @ts-ignore
        data: [...cachedData.data, ...data],
        pageIndex: page.current,
        perPage,
      });
      page.current++;
      onSuccess && onSuccess(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
      onError && onError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (cache.has(쿼리키)) return;
    fetch();
  }, [perPage, 쿼리키]);

  // ErrorBoundary 처리
  if (useErrorBoundary && error) {
    throw new Error(error.message);
  }

  const cachedData = cache.get(쿼리키);
  return {
    isLoading: isLoading,
    data: cachedData?.data || [],
    error,
    onNextFetch: fetch,
  };
}

type useInfiniteFetchOption<T> = {
  queryKey: unknown[];
  perPage?: number;
  onSuccess?: (data?: T) => void;
  onError?: (error?: unknown) => void;
  useErrorBoundary?: boolean;
  enabled?: boolean;
  suspense?: boolean;
};

type InfiniteCache<T> =
  | {
      data: T;
      pageIndex: number;
      perPage: number;
    }
  | undefined;
