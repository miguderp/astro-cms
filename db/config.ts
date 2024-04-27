import { defineDb } from "astro:db";

import { Content, Session, User, Variant } from "./schema";

// ? https://astro.build/db/config
export default defineDb({
	tables: {
		Content,
		Session,
		User,
		Variant,
	},
});
