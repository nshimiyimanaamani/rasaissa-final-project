import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    grade,
    password
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      role: [UserRole.STUDENT],
      Student: {
        create: {
          grade: grade
        },
      },
    },
    include: {
      Student: true,
    },
  });

  return NextResponse.json(user);
}
