import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { HTTP_STATUS } from '@/constants/httpStatus';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, projectType } = await req.json();

  const origin = req.headers.get('origin');
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;

  // if (origin && origin !== allowedOrigin) {
  //   return NextResponse.json(
  //     { error: 'Forbidden' },
  //     { status: HTTP_STATUS.FORBIDDEN }
  //   );
  // }

  try {
    // 1️⃣ Send email to you (site owner)
    await resend.emails.send({
      from: `${name}<onboarding@resend.dev>`,
      to: ['milton.antony.ngala@gmail.com'],
      replyTo: email,
      subject: `${projectType} Inquiry`,
      html: `
        <h2>${projectType} Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Send confirmation email to client
    await resend.emails.send({
      from: 'Milton Ngala <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your message',
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for reaching out regarding your <strong>${projectType}</strong> project.</p>

        <p>I’ve received your message and will review it shortly. I’ll get back to you as soon as possible.</p>

        <p>Best regards,<br />

        <strong>Milton Ngala</strong><br />
        Software Engineer</p><br />
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: HTTP_STATUS.OK, statusText: 'Emails sent successfully.' }
    );
  } catch (error) {
    console.error('Email error:', error);

    return NextResponse.json(
      { success: false },
      {
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        statusText: 'Failed to send email',
      }
    );
  }
}
