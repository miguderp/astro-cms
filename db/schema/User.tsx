import { column, defineTable } from "astro:db";

export const User = defineTable({
	columns: {
		id: column.text({
			label: "ID",
			primaryKey: true,
		}),
		username: column.text({
			label: "Username",
		}),
		email: column.text({
			label: "Email",
			unique: true,
		}),
		hashedPassword: column.text({
			label: "Hashed password",
		}),
	},
});
