import { NextResponse } from "next/server";
import buildInfo from "@/build-info.json";

export async function GET() {
  return NextResponse.json({
    ok: true,
    deployedAt: buildInfo.deployedAt ?? null,
    commit: buildInfo.commit ?? null,
    branch: buildInfo.branch ?? null,
  });
}