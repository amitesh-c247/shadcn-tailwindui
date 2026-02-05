import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const demoUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("session")?.value

  if (!token) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({ user: demoUser })
}
