import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const nextDir = join(process.cwd(), ".next");

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("Removed stale .next build output.");
} else {
  console.log("No .next directory to remove.");
}
