# hnguyen.uk

Source for my personal website, [hnguyen.uk](https://hnguyen.uk): about me, interview prep
(coding and system design questions with solutions) and projects.

Built with [Astro](https://astro.build). Every page is a Markdown file, and the site is hosted
on Cloudflare Pages, which rebuilds it on every push to `main`.

## Adding content

| What | Where |
| --- | --- |
| Interview prep question | `src/content/prep/<slug>.md` |
| Project | `src/content/projects/<slug>.md` |
| About page | `src/pages/index.astro` |
| Name and links | `src/site.ts` |
| Images | `public/images/` (use `/images/file.png` in Markdown) |

Three ways to publish, from fastest to most hands-on:

1. **In the browser:** open [Pages CMS](https://app.pagescms.org), sign in with GitHub, pick this
   repo and edit. Saving commits to `main` and the site updates about a minute later.
2. **On GitHub:** press `.` on the repo page to open the web editor, add a Markdown file, commit.
3. **Locally:**

   ```sh
   npm install
   npm run new prep "Valid Parentheses"   # or: npm run new project "My CLI tool"
   npm run dev                            # preview at http://localhost:4321
   git add . && git commit -m "Add Valid Parentheses" && git push
   ```

New posts start with `draft: true`. Drafts show up in `npm run dev` but not on the live site;
set `draft: false` when the post is ready.

### Writing tips

- Wrap solutions in `<details><summary>Show solution</summary> ... </details>` so readers can try first.
- Code blocks get syntax highlighting and a copy button.
- Use a ` ```mermaid ` code block for system design diagrams.

## Deploying

Hosted on Cloudflare Workers (static assets), connected to this repo. Every push to `main`
runs `npm run build` and then `npx wrangler deploy`, which uploads `dist/` as configured in
`wrangler.jsonc`. The Worker name there must match the project name in Cloudflare (`hnguyen-uk`).
