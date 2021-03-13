#!/usr/bin/env node

const esbuild = require("esbuild");

const glob = require("glob");

const isWatch = process.argv.includes("--watch");

esbuild
  .build({
    entryPoints: glob.sync("src/**/!(*.test).ts"),
    outdir: "dist",
    platform: "node",
    format: "cjs",
    target: "es6",
    sourcemap: true,
    watch: isWatch,
  })
  .catch(() => {
    process.exit(1); // eslint-disable-line unicorn/no-process-exit
  });
