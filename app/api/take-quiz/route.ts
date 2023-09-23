import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    userId,
    quizId,
    score,
  } = body;

  console.log(body)
  const assigned = await prisma.quizResult.create({
    data: {
      userId,
      quizId,
      score
    },
  });

  return NextResponse.json(assigned);
}
