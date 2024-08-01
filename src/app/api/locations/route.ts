import { NextRequest, NextResponse } from "next/server";
import { Location } from "@/types";

export async function GET(
  _req: NextRequest
): Promise<NextResponse<Location[]>> {
  return NextResponse.json([
    {
      name: "Bratislava",
      latLng: [48.148598, 17.107748],
    },
    {
      name: "Vienna",
      latLng: [48.210033, 16.363449],
    },
    {
      name: "Erlaufsee",
      latLng: [47.791809, 15.273135],
    },
  ]);
}
