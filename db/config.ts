import { defineDb } from "astro:db";

import { User } from "./schema/User";
import { Session } from "./schema/Session";

// ? https://astro.build/db/config
export default defineDb({
	tables: {
		User,
		Session,
	},
});
