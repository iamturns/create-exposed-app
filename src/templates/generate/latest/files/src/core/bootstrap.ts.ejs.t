---
to: src/core/bootstrap.ts
---
import dotenv from "dotenv";

import { bootstrapConfig } from "./config";
import { bootstrapDebugLogger } from "./debug-logger";

bootstrap();

function bootstrap() {
  dotenv.config();
  bootstrapConfig();
  bootstrapDebugLogger();
}
