import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LexicalNode } from './graphql/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function lexicalToHtml(node: LexicalNode): string {
  if (!node) return '';

  // Text node — apply formatting bitmask
  if (node.type === 'text') {
    let text = escapeHtml(node.text);
    const format = node.format || 0;

    if (format & 1) text = `<strong>${text}</strong>`; // bold
    if (format & 2) text = `<em>${text}</em>`; // italic
    if (format & 4) text = `<s>${text}</s>`; // strikethrough
    if (format & 8) text = `<u>${text}</u>`; // underline
    if (format & 16) text = `<code>${text}</code>`; // code
    if (format & 32) text = `<sub>${text}</sub>`; // subscript
    if (format & 64) text = `<sup>${text}</sup>`; // superscript

    return text;
  }

  const children = ('children' in node ? (node.children ?? []) : [])
    .map(lexicalToHtml)
    .join('');

  switch (node.type) {
    case 'root':
      return children;

    case 'heading': {
      const tag = node.tag || 'h2';
      return `<${tag}>${children}</${tag}>`;
    }

    case 'paragraph':
      return `<p>${children}</p>`;

    case 'link': {
      const url = node.fields?.url || '#';
      const target = node.fields?.newTab
        ? ' target="_blank" rel="noopener noreferrer"'
        : '';
      return `<a href="${escapeHtml(url)}"${target}>${children}</a>`;
    }

    case 'linebreak':
      return '<br>';

    case 'list': {
      const tag = node.listType === 'number' ? 'ol' : 'ul';
      return `<${tag}>${children}</${tag}>`;
    }

    case 'listitem':
      return `<li>${children}</li>`;

    case 'quote':
      return `<blockquote>${children}</blockquote>`;

    default:
      // Unknown node type — just render its children so nothing is silently dropped
      return children;
  }
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
