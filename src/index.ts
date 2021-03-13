#!/usr/bin/env node

// Ignore this file from unit tests. It should be tested by an end-to-end test instead.
/* istanbul ignore file */

import path from "path";

import enquirer from "enquirer";
import { Logger as HygenLogger, runner as hygen } from "hygen";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await main();
})();

async function main() {
  const isDebug = !!process.env.DEBUG;
  const hygenLogger = new HygenLogger(console.log.bind(console)); // eslint-disable-line no-console

  // Hygen expects a generate name and action name with the args
  const hygenArgs = ["generate", "latest", ...process.argv.slice(2)];

  await hygen(hygenArgs, {
    cwd: process.cwd(),
    templates: path.join(__dirname, "templates"),
    logger: hygenLogger,
    createPrompter: () =>
      // Type declarations provided by `hygen` are limited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
      enquirer as any,
    debug: isDebug,
  });

  /* eslint-disable no-console */
  console.log(
    "First time? Follow the setup instructions under MAINTAINING.md."
  );
  /* eslint-enable no-console */
}
