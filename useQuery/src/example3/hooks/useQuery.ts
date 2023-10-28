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
    if (!enabled) return;
    if (!suspense) return;
    if (!data) return;
    if (cache.has(쿼리키)) return;

    // GYU-TODO: 캐시 걸리는 시점이 지금 문제
    // 캐시가 적용되면 의도대로 동작하지 않음
    cache.set(쿼리키, data);

    // 의미상으로는 쿼리키까지 호출하는 것이 맞는데
    // 위 useEffect 에서 쿼리키에 따라 호출 여부를 판단했고
    // 해당 부분은 suspenseWrapper 에서 올바른 결과값을 할당하기 위해 처리
    // ? 리액트의 리렌더링 이슈로 쿼리키가 undefinend 나 null 인 경우도 호출됨 그래서 씽크가 안맞아서 우선 data 만 의존성 추가
  }, [data]);

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
  suspense?: boolean;
};
