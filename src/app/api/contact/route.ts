import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, projectType } = await req.json();

  const origin = req.headers.get('origin');
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;

  if (origin && origin !== allowedOrigin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: ['milton.antony.ngala@gmail.com'],
      replyTo: email,
      subject: `New ${projectType} Inquiry`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
