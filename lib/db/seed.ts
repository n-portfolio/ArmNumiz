import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { products, admins } from './schema';
import { sampleProducts } from '../sampleData';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import ws from 'ws';

dotenv.config({ path: '.env.local' });

// Polyfill WebSocket for Node.js environment
if (!globalThis.WebSocket) {
    globalThis.WebSocket = ws as any;
}

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
    console.log('Seeding database...');

    // Create admin user
    const passwordHash = await bcrypt.hash('Kristina126', 10);
    await db.insert(admins).values({
        username: 'admin',
        passwordHash,
    });
    console.log('Admin user created');

    // Insert sample products
    const productsToInsert = sampleProducts.map((product) => ({
        name: product.name,
        price: product.price.toString(),
        currency: 'RUB',
        image: product.image,
        category: product.category,
        description: product.description,
    }));

    await db.insert(products).values(productsToInsert);
    console.log(`Inserted ${productsToInsert.length} products`);

    console.log('Seeding completed!');
    process.exit(0);
}

main().catch((err) => {
    console.error('Seeding failed!', err);
    process.exit(1);
});
