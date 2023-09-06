// prisma/seeds/adminSeed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  try {
    const existingAdmin = await prisma.user.findFirst({
      where: {
        email: 'admin@example.com', // Change to the desired admin email
      },
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin_password', 10); // Change to the desired admin password

      const adminUser = await prisma.user.create({
        data: {
          email: 'admin@example.com', // Change to the desired admin email
          name: 'Admin', // Change to the desired admin name
          hashedPassword,
          role: 'ADMIN',
        },
      });

      console.log('Admin user seeded successfully:', adminUser);
    } else {
      console.log('Admin user already exists:', existingAdmin);
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
