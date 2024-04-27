import { db, User } from "astro:db";
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
}
