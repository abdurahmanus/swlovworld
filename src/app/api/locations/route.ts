import { type NextRequest, NextResponse } from "next/server";
import type { MapLocation } from "@/types";
import { locations } from "@/content/locations";

export async function GET(
  _req: NextRequest
): Promise<NextResponse<MapLocation[]>> {
  return NextResponse.json(locations);
}
