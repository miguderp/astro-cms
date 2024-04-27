import { nanoid } from "nanoid";

const prefixes = {
	content: "post",
	user: "usr",
} as const;

export function newId(prefix: keyof typeof prefixes): string {
	return [prefixes[prefix], nanoid(12)].join("_");
}
