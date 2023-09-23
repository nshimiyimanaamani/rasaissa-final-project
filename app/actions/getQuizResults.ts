import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getQuizResults = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const quizResults = await prisma.quizResult.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        quiz: {
          select: {
            title: true,
          },
        },
      },
    });

    // Extract user.name, quiz.title, and score from the results
    const formattedResults = quizResults.map((result) => ({
    id : result.id,
      userName: result.user.name,
      quizTitle: result.quiz.title,
      score: result.score,
    }));

    return formattedResults;
  } catch (error: any) {
    console.error("Error fetching mentors:", error);
    return [];
  }
};

export default getQuizResults;
