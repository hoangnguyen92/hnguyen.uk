import { getCollection } from 'astro:content';

// Drafts show up in `npm run dev` but are left out of the live site.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export const getPrep = async () => (await getCollection('prep', visible)).sort(newestFirst);
export const getProjects = async () =>
  (await getCollection('projects', visible)).sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || newestFirst(a, b),
  );
