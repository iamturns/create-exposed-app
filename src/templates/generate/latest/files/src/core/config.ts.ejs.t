---
to: src/core/config.ts
---
export interface Config {
  PACKAGE_NAME: string;
}

export function createConfig(): Config {
  return {
    PACKAGE_NAME: "<%- packageName %>",
  };
}

export const config: { current: Config } = {
  current: {} as Config, // Consumers can assume the bootstrap function has been called
};

export function bootstrapConfig(): void {
  config.current = createConfig();
}
