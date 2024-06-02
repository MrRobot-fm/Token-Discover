import { NextRequest, NextResponse } from "next/server";
import { kyNftGoInstance } from "@/api/ky-instance";

export async function GET(request: NextRequest) {
  const nextSearchParams = request.nextUrl.searchParams;
  const address = nextSearchParams.get("contractAddress");
  const sortBy = nextSearchParams.get("sort_by");
  const cursor = nextSearchParams.get("cursor");
  const limit = nextSearchParams.get("limit");
  const keyword = nextSearchParams.get("key_word");
  const isListing = nextSearchParams.get("is_listing");

  const searchParams = {
    ...(sortBy && { sortBy }),
    ...(cursor && { cursor }),
    ...(limit && { limit }),
    ...(keyword && { key_word: keyword }),
    ...(isListing && { isListing }),
  };

  const hasParams = !!Object.values(searchParams || {}).length;

  const res = await kyNftGoInstance(`v2/collection/${address}/filtered_nfts`, {
    ...(hasParams && {
      searchParams,
    }),
  }).json();

  return NextResponse.json(res);
}
