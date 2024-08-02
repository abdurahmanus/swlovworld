import { NextRequest, NextResponse } from "next/server";
import { Location } from "@/types";
import { locations } from "@/content/locations";

export async function GET(
  _req: NextRequest
): Promise<NextResponse<Location[]>> {
  return NextResponse.json(locations);
}
