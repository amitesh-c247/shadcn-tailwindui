export type User = {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

export type ApiError = {
  message: string
  status?: number
  details?: Record<string, unknown>
}
