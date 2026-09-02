import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import HTTP_STATUS from '@/constants/httpStatus';

const resend = new Resend(process.env.RESEND_API_KEY);
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character);

const getClientKey = (req: Request) =>
  req.headers.get('cf-connecting-ip') ??
  req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
  'unknown';

const isRateLimited = (key: string) => {
  const now = Date.now();
  const current = rateLimit.get(key);

  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  current.count += 1;
  return false;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidPhone = (value: string) => /^\+?[\d\s\-()]{7,15}$/.test(value);
const collaborationTypes = new Set([
  'Corporate / Enterprise Consulting',
  'Freelance Project / MVP',
  'Other',
]);

const POST = async (req: Request) => {
  const origin = req.headers.get('origin');
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;

  if (!allowedOrigin || origin !== allowedOrigin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: HTTP_STATUS.FORBIDDEN });
  }

  if (isRateLimited(getClientKey(req))) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: HTTP_STATUS.BAD_REQUEST });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: HTTP_STATUS.BAD_REQUEST });
  }

  try {
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const collaborationType = typeof body.collaborationType === 'string'
      ? body.collaborationType.trim()
      : '';
    const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : '';

    if (
      name.length < 1 || name.length > 100 ||
      !isValidEmail(email) || email.length > 254 ||
      !isValidPhone(phone) ||
      message.length < 20 || message.length > 5000
    ) {
      return NextResponse.json({ error: 'Invalid contact details' }, { status: HTTP_STATUS.BAD_REQUEST });
    }

    if (collaborationType && !collaborationTypes.has(collaborationType)) {
      return NextResponse.json({ error: 'Invalid collaboration type' }, { status: HTTP_STATUS.BAD_REQUEST });
    }

    const inquiryLabel = collaborationType || projectType || 'General';
    if (inquiryLabel.length > 100 || /[\r\n]/.test(inquiryLabel)) {
      return NextResponse.json({ error: 'Invalid collaboration type' }, { status: HTTP_STATUS.BAD_REQUEST });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);
    const safeInquiryLabel = escapeHtml(inquiryLabel);

    // Send notification email to site owner
    await resend.emails.send({
      from: `Milton Ngala <onboarding@resend.dev>`,
      to: ['milton@ngala.co.ke'],
      replyTo: email,
      subject: `${inquiryLabel} Inquiry`,
      html: `
        <h2>${safeInquiryLabel} Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Collaboration Type:</strong> ${safeInquiryLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Send confirmation email to the enquirer
    await resend.emails.send({
      from: 'Milton Ngala <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your message',
      html: `
        <p>Hi ${safeName},</p>

        <p>Thank you for reaching out regarding <strong>${safeInquiryLabel}</strong>.</p>

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
