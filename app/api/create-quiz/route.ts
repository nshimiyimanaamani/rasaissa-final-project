import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(
  req: Request,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const body = await req.json(); // Use req.json() to parse the JSON data

      if (!Array.isArray(body.questions)) {
        throw new Error('Questions should be an array');
      }
      const randomQuizName = `Quiz-${uuidv4()}`;
      // Create a new quiz
      const quiz = await prisma.quiz.create({
        data: {
          title: randomQuizName // Set the title as needed
        },
      });

      const createdQuestions = [];

      for (const questionData of body.questions) {
        const { title, options, correctAnswerIndex } = questionData;

        const question = await prisma.question.create({
          data: {
            text: title,
            options: {
              create: options.map((option: string, index: number) => ({
                text: option,
                isCorrect: index === correctAnswerIndex,
              })),
            },
            quiz: {
              connect: {
                id: quiz.id,
              },
            },
          },
        });

        createdQuestions.push(question);
      }

      // Send a JSON response with a 200 status code, including the created quiz and questions
      return NextResponse.json({ quiz, questions: createdQuestions }, { status: 200 });
    } catch (error) {
      console.error('Error creating quiz and questions', error);
      // Send an error JSON response with a 500 status code
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  } else {
    // Send a JSON response for Method Not Allowed with a 405 status code
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
