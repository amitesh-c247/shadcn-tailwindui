import type { User } from "@/types"
import { http } from "./http"

export type LoginPayload = {
  email: string
  password: string
}

export type SignupPayload = {
  name: string
  email: string
  password: string
}

export async function login(payload: LoginPayload) {
  return http<{ user: User; token: string }>("/api/login", {
    method: "POST",
    body: payload,
  })
}

export async function signup(payload: SignupPayload) {
  return http<{ user: User; token: string }>("/api/signup", {
    method: "POST",
    body: payload,
  })
}

export async function logout() {
  return http<void>("/api/logout", { method: "POST" })
}

export async function getSession() {
  return http<{ user: User | null }>("/api/session")
}
