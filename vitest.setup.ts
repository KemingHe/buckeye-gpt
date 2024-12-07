import "@testing-library/jest-dom";

import path from "node:path";
import { config } from "dotenv";

const devEnvFilePath: string = path.resolve(
  process.cwd(),
  ".env.development.local"
);
config({ path: devEnvFilePath });

// Use Playwright to test components with transitions in a true browser env.
