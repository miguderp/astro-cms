import { defineMiddleware } from "astro:middleware";
import type { AstroCookieSetOptions } from "astro";

import { lucia } from "@/auth";

const authRoutes = ["/admin/secret"];

export const onRequest = defineMiddleware(async (context, next) => {
	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;

	if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;

		// ? verify that we’re not on an auth route
		if (authRoutes.includes(context.url.pathname)) {
			return context.redirect("/admin/sign-in");
		} else {
			return next();
		}
	}

	const { session, user } = await lucia.validateSession(sessionId);

	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as AstroCookieSetOptions);
	}

	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as AstroCookieSetOptions);

		return context.redirect("/admin/sign-in");
	}

	context.locals.session = session;
	context.locals.user = user;

	return next();
});
