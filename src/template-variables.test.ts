import { getNpmPackageName } from "./template-variables";

test("get npm package name", () => {
  const result = getNpmPackageName({
    packageName: "test-package-name",
    npmScope: "@test-scope",
  });
  expect(result).toBe("@test-scope/test-package-name");
});

test("get npm package name without scope", () => {
  const result = getNpmPackageName({ packageName: "test-package-name" });
  expect(result).toBe("test-package-name");
});

test("get npm package name without any data", () => {
  const result = getNpmPackageName({});
  expect(result).toBe("");
});
