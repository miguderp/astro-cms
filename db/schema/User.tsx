import { column, defineTable } from "astro:db";

export const User = defineTable({
	columns: {
		id: column.text({
			label: "ID",
			primaryKey: true,
		}),
		firstName: column.text({
			label: "First name",
			optional: true,
		}),
		lastName: column.text({
			label: "Last name",
			optional: true,
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
