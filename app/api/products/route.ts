import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
    try {
        console.log('Fetching products from database...');
        console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);

        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');

        let allProducts;
        if (category) {
            allProducts = await db.select().from(products).where(eq(products.category, category));
        } else {
            allProducts = await db.select().from(products);
        }

        console.log('Products fetched:', allProducts.length);
        return NextResponse.json(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        // Return empty array instead of error object to prevent frontend crashes
        return NextResponse.json([]);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, price, currency, image, category, description } = body;

        // Simple authentication check - in production, use proper JWT or session
        const isAdmin = request.headers.get('x-admin-auth') === 'true';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const newProduct = await db.insert(products).values({
            name,
            price: price.toString(),
            currency: currency || 'RUB',
            image,
            category,
            description,
        }).returning();

        return NextResponse.json(newProduct[0], { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
