import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { parseFeatureMarkdown } from './pacelab-content';
import { doseButlerFeatures } from './site';

export const doseButlerFeatureSlugs = doseButlerFeatures.ko.map((feature) =>
  feature.href.replace(/^\/dosebutler\/|\/$/g, ''),
);

const contentRoot = join(process.cwd(), 'src/content/site/dosebutler');

export async function loadDoseButlerFeaturePage(lang: 'ko' | 'en' | 'ja', slug: string) {
  const markdown = await readFile(join(contentRoot, lang, slug, 'index.md'), 'utf8');
  return parseFeatureMarkdown(markdown);
}
