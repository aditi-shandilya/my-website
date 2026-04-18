const fs = require("fs");
const path = require("path");

const buildInfo = {
  deployedAt: new Date().toISOString(),
  commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
  branch: process.env.VERCEL_GIT_COMMIT_REF ?? null,
};

const outputPath = path.join(process.cwd(), "build-info.json");
fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));
console.log("Wrote build-info.json");