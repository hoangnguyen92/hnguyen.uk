// Create a new post: npm run new prep "Valid Parentheses"
//                    npm run new project "My CLI tool"
import { existsSync, writeFileSync } from 'node:fs';

const [kind, ...words] = process.argv.slice(2);
const title = words.join(' ').trim();
const dirs = { prep: 'src/content/prep', project: 'src/content/projects' };

if (!dirs[kind] || !title) {
  console.log('Usage: npm run new prep "Question title"\n       npm run new project "Project name"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `${dirs[kind]}/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const front =
  kind === 'prep'
    ? `title: ${JSON.stringify(title)}
description: ""
category: coding # coding | system-design | behavioral
difficulty: medium # easy | medium | hard
tags: []
date: ${date}
draft: true`
    : `title: ${JSON.stringify(title)}
description: ""
date: ${date}
tags: []
# repo: https://github.com/hoangnguyen92/...
# url: https://...
featured: false
draft: true`;

const body =
  kind === 'prep'
    ? `## The question\n\n## Clarify first\n\n## Approach\n\n<details>\n<summary>Show solution</summary>\n\n\`\`\`java\n\n\`\`\`\n\n</details>\n\n## Complexity\n\n## What interviewers look for\n`
    : `## What it is\n\n## How I built it\n\n## What I learned\n`;

writeFileSync(file, `---\n${front}\n---\n\n${body}`);
console.log(`Created ${file} (set draft: false when it's ready to publish)`);
