import { column, defineTable } from "astro:db";

import { Variant } from "./Variant";

export const Content = defineTable({
	columns: {
		id: column.text({
			label: "ID",
			primaryKey: true,
		}),
		title: column.text({
			label: "Title",
			unique: true,
		}),
		slug: column.text({
			label: "Slug",
			unique: true,
		}),
		variant: column.text({
			label: "Variant",
			references: () => Variant.columns.slug,
		}),
	},
});
