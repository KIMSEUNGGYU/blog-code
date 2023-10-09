import { useCallback, useEffect, useState } from 'react';

export function useQuery<T>(fetcher: () => Promise<T>, { queryKey, ...option }: UseQueryOption<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();

  const { enabled = true } = option;

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetcher();
      setData(data);
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

    fetch();
  }, [enabled, JSON.stringify(queryKey)]);

  return {
    isLoading: isLoading,
    data,
    error,
  };
}

type UseQueryOption<T> = {
  queryKey: unknown[];
  enabled?: boolean;
  onSuccess?: (data?: T) => void;
  onError?: (error?: unknown) => void;
};
