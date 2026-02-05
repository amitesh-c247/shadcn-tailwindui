export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export type HttpOptions = {
  method?: HttpMethod
  headers?: HeadersInit
  body?: unknown
  signal?: AbortSignal
}

export async function http<T>(input: string, options: HttpOptions = {}): Promise<T> {
  const { method = "GET", headers, body, signal } = options

  const response = await fetch(input, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  })

  if (!response.ok) {
    let message = response.statusText

    try {
      const data = await response.json()
      message = data?.message ?? message
    } catch {
      // Ignore JSON parse errors for non-JSON responses.
    }

    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}
