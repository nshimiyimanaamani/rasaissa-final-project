import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getQuizzesWithQuestionCount = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    // Fetch all quizzes along with related questions
    const quizzes = await prisma.quiz.findMany({
      include: {
        questions: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc'
      },
    });

    // Process the data to get the required information
    const quizData = quizzes.map((quiz) => ({
      id: quiz.id,
      title: quiz.title,
      questionCount: quiz.questions.length,
      createdAt: quiz.createdAt,
    }));


    return quizData;
  } catch (error: any) {
    return [];
  }
};

export default getQuizzesWithQuestionCount;
