import { column, defineTable } from "astro:db";

export const Variant = defineTable({
	columns: {
		slug: column.text({
			label: "Slug",
			primaryKey: true,
		}),
		name: column.text({
			label: "Name",
			unique: true,
		}),
	},
});
