import { TamplateEum } from "types";

export function validateTemplate(templateName: string): boolean {
  return Boolean(TamplateEum[templateName]);
}
