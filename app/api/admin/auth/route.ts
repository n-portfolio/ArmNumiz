import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { admins } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { password } = body;

        if (!password) {
            return NextResponse.json({ error: 'Password is required' }, { status: 400 });
        }

        // Get admin user
        const adminUsers = await db.select().from(admins).where(eq(admins.username, 'admin'));

        if (adminUsers.length === 0) {
            return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
        }

        const admin = adminUsers[0];

        // Verify password
        const isValid = await bcrypt.compare(password, admin.passwordHash);

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        // Return success with a simple token (in production, use JWT)
        return NextResponse.json({
            success: true,
            token: 'admin-authenticated',
            username: admin.username,
        });
    } catch (error) {
        console.error('Error authenticating admin:', error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
}
