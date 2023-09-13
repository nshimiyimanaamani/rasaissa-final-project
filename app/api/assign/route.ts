import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    studentId,
    mentorId,
  } = body;

  const assigned = await prisma.assigned.create({
    data: {
      studentId,
      mentorId,
    },
  });

  return NextResponse.json(assigned);
}
