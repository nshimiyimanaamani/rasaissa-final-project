import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import { Prisma, UserRole } from "@prisma/client"; // Import Prisma types

const getMentors = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const mentors = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        NOT: {
          email: session.user.email
        },
        role: {
          has: UserRole.MENTOR
        }
      }
    });

    return mentors;
  } catch (error: any) {
    return [];
  }
};

export default getMentors;
