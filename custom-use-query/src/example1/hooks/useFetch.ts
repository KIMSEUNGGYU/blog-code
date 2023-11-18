import { useEffect, useState } from 'react';

export function useFetch<T>(fetcher: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetcher();
        setData(response);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [fetcher]);

  return { isLoading, data, error };
}
