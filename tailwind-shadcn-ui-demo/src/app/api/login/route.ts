import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}))
  const email = typeof payload.email === "string" ? payload.email : "demo@example.com"
  const nameFromEmail = email.split("@")[0] || "Demo User"

  const user = {
    id: "demo-user",
    name: typeof payload.name === "string" ? payload.name : nameFromEmail,
    email,
  }

  const token = "demo-token"
  const response = NextResponse.json({ user, token })

  response.cookies.set("session", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  })

  return response
}
