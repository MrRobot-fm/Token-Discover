import { NextRequest, NextResponse } from "next/server";
import { kyNftGoInstance } from "@/api/ky-instance";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");

  const res = await kyNftGoInstance(`v1/collection/name/${query}`).json();

  return NextResponse.json(res);
}
