import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import HTTP_STATUS from '@/constants/httpStatus';

const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async (req: Request) => {
  const { name, email, phone, message, collaborationType, projectType } = await req.json();

  // collaborationType is the new field; projectType kept for backwards compatibility
  const inquiryLabel =
    (collaborationType as string | undefined) ??
    (projectType as string | undefined) ??
    'General';

  const origin = req.headers.get('origin');
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;

  // if (origin && origin !== allowedOrigin) {
  //   return NextResponse.json(
  //     { error: 'Forbidden' },
  //     { status: HTTP_STATUS.FORBIDDEN }
  //   );
  // }

  try {
    // Send notification email to site owner
    await resend.emails.send({
      from: `${name}<onboarding@resend.dev>`,
      to: ['milton@ngala.co.ke'],
      replyTo: email,
      subject: `${inquiryLabel} Inquiry`,
      html: `
        <h2>${inquiryLabel} Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Collaboration Type:</strong> ${inquiryLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to the enquirer
    await resend.emails.send({
      from: 'Milton Ngala <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your message',
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for reaching out regarding <strong>${inquiryLabel}</strong>.</p>

        <p>I've received your message and will review it shortly. I'll get back to you as soon as possible.</p>

        <p>Best regards,<br />
        <strong>Milton Ngala</strong><br />
        Software Engineer</p>
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
};

export { POST };
