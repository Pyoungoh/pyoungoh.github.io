import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { parseFeatureMarkdown } from './pacelab-content';
import { pillKeepFeatures } from './site';

export const pillKeepFeatureSlugs = pillKeepFeatures.ko.map((feature) =>
  feature.href.replace(/^\/pillkeep\/|\/$/g, ''),
);

const contentRoot = join(process.cwd(), 'src/content/site/pillkeep');

export async function loadPillKeepFeaturePage(lang: 'ko' | 'en' | 'ja', slug: string) {
  const markdown = await readFile(join(contentRoot, lang, slug, 'index.md'), 'utf8');
  return parseFeatureMarkdown(markdown);
}
