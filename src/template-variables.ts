export function getNpmPackageName({
  packageName,
  npmScope,
}: {
  packageName?: string;
  npmScope?: string;
}): string | undefined {
  return [npmScope, packageName].filter(Boolean).join("/");
}
