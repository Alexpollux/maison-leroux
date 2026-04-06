import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  // TODO: brancher Resend (email) ou Supabase (stockage)
  console.log('Contact:', { name, email, message })

  return NextResponse.json({ success: true })
}
