# Astro CMS

> [!NOTE]
> This is a side project for me, as I have a full-time job. It's still in the early stages of development, so it's not recommended for production use.

## Description

Astro CMS is an opinionated CMS designed for Astro, catering to small to mid-sized projects and aimed at developers. It maximizes the use of the Astro ecosystem, and when additional functionality is needed, it incorporates tools like Svelte with shadcn-svelte.

## What you can expect (soon™)
* **Simple CMS Integration:** Use [Astro DB](https://astro.build/db/) seamlessly with any [Astro](https://astro.build/) project via the [integration API](https://docs.astro.build/en/reference/integrations-reference/).
* **Authentication:** Implement authentication using [Lucia](https://lucia-auth.com/) with Astro DB as the provider.
* **Real-time Collaboration:** Enable real-time collaboration through [Liveblocks](https://liveblocks.io/).
* **Additional Tools:** Enjoy features like [Tiptap](https://tiptap.dev/) and [Svelte](https://svelte.dev/) with [shadcn-svelte](https://www.shadcn-svelte.com/).

## What you shouldn’t expect
* This CMS does not generate your website’s front-end. Creating new content types will only add new entries to the Astro DB instance.
* This solution may not be flexible enough for integrating various tools into the admin area without potential issues. It is an opinionated approach and may not suit everyone’s needs.
* Fast iteration time. As a side project, development may be slow. Collaboration is not currently expected.

> [!TIP]
> For a more stable product, consider [Astro StudioCMS](https://astro-studiocms.xyz/), which has a larger development team.

## Roadmap
Track the progress of this project on the [GitHub project board](https://github.com/users/miguderp/projects/4), which will be regularly updated. Currently, I am focused on implementing MVP features. Once completed, I will outline additional features and begin versioning through Changesets and GitHub Releases.
