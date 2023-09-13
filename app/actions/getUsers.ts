import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import getCurrentUser from "./getCurrentUser";
import { User } from "@prisma/client";

const getUsers = async () => {
  const session = await getSession();
  const currentUser = await getCurrentUser();

  if (!session?.user?.email) {
    return [];
  }

  try {
    let users: User[] = [];

    if (currentUser?.role.includes("MENTOR")) {
      // Fetch students assigned to the mentor
      const assignments = await prisma.assigned.findMany({
        where: {
          mentorId: currentUser.id
        },
        include: {
          student: true
        }
      });
      users = await Promise.all(assignments.map((assignment) => assignment.student));
    } else if (currentUser?.role.includes("STUDENT")) {
      // Fetch mentors assigned to the student
      const assignments = await prisma.assigned.findMany({
        where: {
          studentId: currentUser.id
        },
        include: {
          mentor: true
        }
      });
      users = await Promise.all(assignments.map((assignment) => assignment.mentor));
    }

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
