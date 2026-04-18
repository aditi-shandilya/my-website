import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    deployedAt: process.env.BUILD_TIME ?? null,
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
    branch: process.env.VERCEL_GIT_COMMIT_REF ?? null,
  });
}