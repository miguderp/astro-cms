import { Content, db, User, Variant } from "astro:db";
import { Argon2id } from "oslo/password";

import { newId } from "@/lib/utils";

// ? https://astro.build/db/seed
export default async function seed() {
	const hashedPassword = await new Argon2id().hash("password");

	await db.insert(User).values({
		id: newId("user"),
		email: "admin@astro-cms.com",
		username: "Admin",
		hashedPassword,
	});

	await db.insert(Variant).values([
		{
			slug: "media",
			name: "Media",
		},
		{
			slug: "page",
			name: "Page",
		},
	]);

	await db.insert(Content).values({
		id: newId("content"),
		title: "Home",
		slug: "home",
		variant: "page",
	});
}
