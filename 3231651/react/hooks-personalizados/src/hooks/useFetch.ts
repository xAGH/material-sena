import { useEffect, useState } from "react";

type Status<T> =
  | { status: "pending" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function useFetch<T>(
  url: string,
  isValid: (data: unknown) => data is T,
) {
  const [status, setStatus] = useState<Status<T>>({ status: "pending" });

  useEffect(() => {
    const abortController = new AbortController();

    async function load() {
      try {
        const res = await fetch(url, { signal: abortController.signal });

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data: unknown = await res.json();

        if (!isValid(data)) {
          throw new Error("La respuesta no tiene la forma esperada");
        }

        setStatus({ status: "success", data });
      } catch (error) {
        if (abortController.signal.aborted) return;
        setStatus({
          status: "error",
          error: error instanceof Error ? error.message : "Error desconocido",
        });
      }
    }

    load();

    return () => abortController.abort();
  }, [url, isValid]);

  return status;
}
