import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const productId = parseInt(params.id);
        const product = await db.select().from(products).where(eq(products.id, productId));

        if (product.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const isAdmin = request.headers.get('x-admin-auth') === 'true';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const productId = parseInt(params.id);
        const body = await request.json();
        const { name, price, currency, image, category, description } = body;

        const updatedProduct = await db
            .update(products)
            .set({
                name,
                price: price.toString(),
                currency: currency || 'RUB',
                image,
                category,
                description,
                updatedAt: new Date(),
            })
            .where(eq(products.id, productId))
            .returning();

        if (updatedProduct.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updatedProduct[0]);
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const isAdmin = request.headers.get('x-admin-auth') === 'true';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const productId = parseInt(params.id);
        const deletedProduct = await db
            .delete(products)
            .where(eq(products.id, productId))
            .returning();

        if (deletedProduct.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}
