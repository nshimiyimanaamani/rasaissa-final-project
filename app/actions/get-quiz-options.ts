import prisma from "@/app/libs/prismadb";

const getQuizQuestionsAndOptionsById = async (quizId: string) => {
  try {
    // Fetch the quiz along with its related questions and options
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    if (!quiz) {
      return null; // Quiz with the provided ID does not exist
    }

    // Process the data to get both questions, options, and correct answers
    const questionsWithOptions = quiz.questions.map((question) => ({
      question: question.text,
      options: question.options.map((option) => ({
        text: option.text,
        isCorrect: option.isCorrect, // Add a field to indicate if it's the correct option
      })),
    }));
    
    return questionsWithOptions;
  } catch (error) {
    console.error("Error fetching quiz questions and options:", error);
    return null; // Handle errors gracefully
  }
};

export default getQuizQuestionsAndOptionsById;
