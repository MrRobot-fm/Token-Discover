import { NextRequest, NextResponse } from "next/server";
import { axiosNftGoInstance } from "@/api/axios-instance";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");

  const res = await axiosNftGoInstance(
    `${process.env.NEXT_PUBLIC_NFT_GO_API_URL}/v1/collection/name/${query}`
  );
  const data = res?.data;

  return NextResponse?.json(data);
}
