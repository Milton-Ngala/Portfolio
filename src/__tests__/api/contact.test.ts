/**
 * @jest-environment node
 */
import { POST } from '../../app/api/contact/route';
import { NextResponse } from 'next/server';
import { HTTP_STATUS } from '../../constants/httpStatus';

// Mock Resend
jest.mock('resend', () => {
    return {
        Resend: jest.fn().mockImplementation(() => ({
            emails: {
                send: jest.fn().mockResolvedValue({ id: '123' }),
            },
        })),
    };
});

describe('Contact API', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...originalEnv, NEXT_PUBLIC_APP_URL: 'http://localhost:3000' };
    });

    afterAll(() => {
        process.env = originalEnv;
    });

    const validBody = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello',
        projectType: 'Web Dev',
    };

    it('should return 403 if origin is invalid', async () => {
        const req = new Request('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Origin': 'http://evil.com',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validBody),
        });

        const res = await POST(req);
        expect(res.status).toBe(HTTP_STATUS.FORBIDDEN);
        const data = await res.json();
        expect(data.error).toBe('Forbidden');
    });

    it('should return 200 if origin is valid', async () => {
        const req = new Request('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validBody),
        });

        const res = await POST(req);
        expect(res.status).toBe(HTTP_STATUS.OK);
        const data = await res.json();
        expect(data.success).toBe(true);
    });
});
