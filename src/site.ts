// Edit your details here; they are used across the whole site.
export const SITE = {
  name: 'Hoang Nguyen',
  title: 'Hoang Nguyen',
  description: 'Production Engineer at Meta in London. Interview prep, projects and notes.',
  links: {
    linkedin: 'https://www.linkedin.com/in/hoangnguyen1992/',
    github: 'https://github.com/hoangnguyen92',
  },
};

export const CATEGORIES = {
  coding: 'Coding',
  'system-design': 'System design',
  behavioral: 'Behavioral',
} as const;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
