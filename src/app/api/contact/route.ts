import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  topic?: string
  message?: string
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload
  const { name, email, topic, message } = payload

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  await new Promise((resolve) => setTimeout(resolve, 600))

  console.info(
    `[contact-form] ${name} <${email}> (${topic ?? 'General'}): ${message}`
  )

  return NextResponse.json({ status: 'ok' })
}
