import { NextResponse } from 'next/server';
// 1. Move the import to the top
import { Resend } from 'resend';

// 2. Initialize outside the handler (or inside if you prefer, but the import must be top-level)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Simulate network delay for the "Anime Loading" feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 3. Logic to send via Resend if the key exists
    if (resend) {
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Resend requires a verified domain or their test address
        to: ['Karanj542002@gmail.com'],
        subject: `[PORTFOLIO TRANSMISSION] ${subject}`,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      });
    }

    return NextResponse.json({ success: true, message: 'Transmission received.' }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}