import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { paceLabFeatures } from './site';

export const paceLabFeatureSlugs = paceLabFeatures.ko.map((feature) =>
  feature.href.replace(/^\/pacelab\/|\/$/g, ''),
);

const stopHeadings = new Set([
  'Get the app',
  '앱 다운로드',
  'アプリをダウンロード',
  'Related tools',
  '관련 도구',
  '関連ツール',
]);

const contentRoots = {
  ko: join(process.cwd(), 'src/content/site/pacelab/ko'),
  en: join(process.cwd(), 'src/content/site/pacelab/en'),
  ja: join(process.cwd(), 'src/content/site/pacelab/ja'),
} as const;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderInlineMarkdown(text: string) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function renderSimpleMarkdown(markdown: string) {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    html.push(`<p>${renderInlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      const items: string[] = [];

      for (let j = i; j < lines.length; j += 1) {
        const itemLine = lines[j].trim();
        if (!itemLine.startsWith('- ')) {
          i = j - 1;
          break;
        }
        items.push(`<li>${renderInlineMarkdown(itemLine.slice(2))}</li>`);
        if (j === lines.length - 1) {
          i = j;
        }
      }

      html.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  return html.join('');
}

function parseFeatureMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let index = 0;

  while (index < lines.length && !lines[index].trim()) index += 1;
  const title = lines[index].replace(/^#\s+/, '').trim();
  index += 1;

  while (index < lines.length && !lines[index].trim()) index += 1;
  const backMatch = lines[index]?.trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  const backLabel = backMatch?.[1] ?? '';
  const backHref = backMatch?.[2] ?? '/pacelab/';
  index += 1;

  const introLines: string[] = [];
  while (index < lines.length && !lines[index].startsWith('## ')) {
    introLines.push(lines[index]);
    index += 1;
  }

  const sections: Array<{ heading: string; html: string }> = [];

  while (index < lines.length) {
    const line = lines[index];
    if (!line.startsWith('## ')) {
      index += 1;
      continue;
    }

    const heading = line.replace(/^##\s+/, '').trim();
    index += 1;

    const sectionLines: string[] = [];
    while (index < lines.length && !lines[index].startsWith('## ')) {
      sectionLines.push(lines[index]);
      index += 1;
    }

    if (stopHeadings.has(heading)) {
      break;
    }

    sections.push({
      heading,
      html: renderSimpleMarkdown(sectionLines.join('\n').trim()),
    });
  }

  const introMarkdown = introLines.join('\n').trim();
  const introParagraphs = introMarkdown
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    title,
    backLabel,
    backHref,
    introHtml: renderSimpleMarkdown(introMarkdown),
    description: introParagraphs[0] ?? title,
    sections,
  };
}

export async function loadPaceLabFeaturePage(lang: 'ko' | 'en' | 'ja', slug: string) {
  const filePath = join(contentRoots[lang], slug, 'index.md');
  const markdown = await readFile(filePath, 'utf8');
  return parseFeatureMarkdown(markdown);
}
