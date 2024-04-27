import { column, defineTable } from "astro:db";

import { User } from "./User";

export const Session = defineTable({
	columns: {
		id: column.text({
			label: "ID",
			primaryKey: true,
		}),
		expiresAt: column.date({
			label: "Expires at",
		}),
		userId: column.text({
			label: "User ID",
			references: () => User.columns.id,
		}),
	},
});
