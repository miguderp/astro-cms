import { db, User } from "astro:db";
import { Argon2id } from "oslo/password";

import { newId } from "@/lib/utils";

// ? https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values({
		id: newId("user"),
		username: "Admin",
		email: "admin@astro-cms.com",
		hashedPassword: await new Argon2id().hash("password"),
	});
}
