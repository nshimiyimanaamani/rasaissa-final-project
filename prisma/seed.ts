import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prismaClient = new PrismaClient();

async function main() {
  let user = await prismaClient.user.findFirst({
    where: {
      email: 'admin@example.com',
    },
  });
  if (!user) {
    const hashedPassword = await bcrypt.hash('password', 10);
    user = await prismaClient.user.create({
        data: {
            email: 'admin@example.com', // Change to the desired admin email
            name: 'Admin', // Change to the desired admin name
            hashedPassword,
            role: ['ADMIN'],
          },
    });
  }
}
  



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
