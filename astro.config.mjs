import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// ? https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	integrations: [tailwind(), db()],
	vite: {
		optimizeDeps: {
			exclude: ["oslo", "astro:db"],
		},
	},
	experimental: {
		security: {
			csrfProtection: {
				origin: true,
			},
		},
	},
});
