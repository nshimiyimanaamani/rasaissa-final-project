import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getStudents = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        role: {
          has: 'STUDENT' // Replace 'mentor' with the specific role you want to filter by
        },
        NOT: {
          email: session.user.email
        }
      }
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getStudents;
