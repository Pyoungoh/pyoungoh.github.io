import type { CollectionEntry } from 'astro:content';

import { paceLabFeatures } from './site';

type SitePageEntry = CollectionEntry<'sitePages'>;

export function normalizeEntryId(id: string) {
  return id.replace(/\\/g, '/').replace(/\.md$/, '');
}

export function routeFromEntryId(id: string) {
  let normalized = normalizeEntryId(id);

  normalized = normalized.replace(/^pacelab\/ko(?=\/|$)/, 'pacelab');
  normalized = normalized.replace(/^justweight\/ko(?=\/|$)/, 'justweight');

  if (normalized === 'index') {
    return '/';
  }

  if (normalized.endsWith('/index')) {
    return `/${normalized.slice(0, -'/index'.length)}/`;
  }

  return `/${normalized}/`;
}

export function routeKey(pathname: string) {
  return pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';
}

export function routeFromSlug(slug?: string | string[]) {
  if (!slug || (Array.isArray(slug) && slug.length === 0)) {
    return '/';
  }

  if (Array.isArray(slug)) {
    return `/${slug.join('/')}/`;
  }

  return `/${slug}/`;
}

export function inferLangFromRoute(pathname: string) {
  if (pathname === '/ja/' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/en/' || pathname.startsWith('/en/')) return 'en';
  if (pathname.startsWith('/pacelab/ja/') || pathname === '/pacelab/ja/') return 'ja';
  if (pathname.startsWith('/pacelab/en/') || pathname === '/pacelab/en/') return 'en';
  if (pathname.startsWith('/justweight/ja/') || pathname === '/justweight/ja/') return 'ja';
  if (pathname.startsWith('/justweight/en/') || pathname === '/justweight/en/') return 'en';
  return 'ko';
}

export function extractTitle(markdown = '', fallback = 'Slowlane') {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

export function extractDescription(markdown = '') {
  const lines = markdown
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith('---'))
    .filter((line) => !line.startsWith('#'))
    .filter((line) => !line.startsWith('['))
    .filter((line) => !line.startsWith('- '))
    .filter((line) => !/^[0-9]+\./.test(line));

  return lines[0] ?? 'Slowlane builds simple tools, thoughtfully.';
}

export function getTitle(entry: SitePageEntry, fallback?: string) {
  return entry.data.title ?? extractTitle(entry.body, fallback);
}

export function getDescription(entry: SitePageEntry) {
  return entry.data.description ?? extractDescription(entry.body);
}

export function isSpecialRoute(pathname: string) {
  const key = routeKey(pathname);
  const pacelabDetailRoutes = new Set(
    Object.values(paceLabFeatures)
      .flat()
      .map((feature) => routeKey(feature.href)),
  );

  return new Set([
    '/',
    '/pacelab',
    '/pacelab/en',
    '/pacelab/ja',
    ...pacelabDetailRoutes,
  ]).has(key);
}

export function entryPathFromRoute(pathname: string) {
  const key = routeKey(pathname);
  if (key === '/') return 'index';
  return key.slice(1);
}
