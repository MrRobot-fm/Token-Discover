import { NextRequest, NextResponse } from "next/server";
import { axiosNftGoInstance } from "@/api/axios-instance";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("contractAddress");
  const sortBy = searchParams.get("sort_by");
  const cursor = searchParams.get("cursor");
  const limit = searchParams.get("limit");
  const keyword = searchParams.get("key_word");
  const isListing = searchParams.get("is_listing");

  const hasParams = !!(sortBy || cursor || limit || keyword || isListing);

  const res = await axiosNftGoInstance(
    `${process.env.NEXT_PUBLIC_NFT_GO_API_URL}/v2/collection/${address}/filtered_nfts`,
    {
      ...(hasParams && {
        params: {
          sortBy,
          cursor,
          limit,
          key_word: keyword,
          isListing,
        },
      }),
    }
  );
  const data = res?.data;

  return NextResponse?.json(data);
}
