import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.ip;

  NextResponse.json({ message: ip });
}
