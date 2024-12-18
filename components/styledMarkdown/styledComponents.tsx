import Link from 'next/link';
import type { Components } from 'react-markdown';

const styledComponents: Partial<Components> = {
  // ---------------------------------------------------------------------------
  // Headings (h1, h2, h3, h4, h5, h6).
  h1: ({ node, children, ...props }) => {
    return (
      <h1 className="text-3xl font-bold mt-6 mb-3" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }) => {
    return (
      <h2 className="text-2xl font-bold mt-5 mb-2" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }) => {
    return (
      <h3 className="text-xl font-semibold mt-4 mb-2" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }) => {
    return (
      <h4 className="text-lg font-semibold mt-3 mb-1.5" {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ node, children, ...props }) => {
    return (
      <h5 className="text-base font-medium mt-3 mb-1" {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ node, children, ...props }) => {
    return (
      <h6 className="text-sm font-medium mt-2 mb-1" {...props}>
        {children}
      </h6>
    );
  },
  // ---------------------------------------------------------------------------
  // Paragraphs (p).
  p: ({ node, children, ...props }) => {
    return (
      <p className="text-justify py-2" {...props}>
        {children}
      </p>
    );
  },
  // ---------------------------------------------------------------------------
  // Links (a).
  a: ({ node, children, href, ...props }) => {
    return (
      <Link
        className="link link-primary"
        href={href as string}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </Link>
    );
  },
  // ---------------------------------------------------------------------------
  // Tables (table, thead, tbody, tr, th, td).
  table: ({ node, children, ...props }) => {
    return (
      <div className="overflow-x-auto mx-1">
        <table className="table" {...props}>
          {children}
        </table>
      </div>
    );
  },
  thead: ({ node, children, ...props }) => {
    return (
      <thead className="text-sm text-neutral-content" {...props}>
        {children}
      </thead>
    );
  },
  // ---------------------------------------------------------------------------
  // Lists (ul, ol, li).
  ul: ({ node, children, ...props }) => {
    return (
      <ul className="list-disc ms-5 ps-2" {...props}>
        {children}
      </ul>
    );
  },
  ol: ({ node, children, ...props }) => {
    return (
      <ol className="list-decimal ms-5 ps-2" {...props}>
        {children}
      </ol>
    );
  },
  li: ({ node, children, ...props }) => {
    return (
      <li className="py-1" {...props}>
        {children}
      </li>
    );
  },
  // ---------------------------------------------------------------------------
  // Strong, emphasis, delete, and insert (strong, em, del, ins).
  strong: ({ node, children, ...props }) => {
    return (
      <strong className="font-bold" {...props}>
        {children}
      </strong>
    );
  },
  em: ({ node, children, ...props }) => {
    return (
      <em className="italic" {...props}>
        {children}
      </em>
    );
  },
  del: ({ node, children, ...props }) => {
    return (
      <del className="line-through" {...props}>
        {children}
      </del>
    );
  },
  ins: ({ node, children, ...props }) => {
    return (
      <ins className="underline" {...props}>
        {children}
      </ins>
    );
  },
  // ---------------------------------------------------------------------------
  // Blockquote (blockquote).
  blockquote: ({ node, children, ...props }) => {
    return (
      <blockquote
        className="mx-2 px-4 text-sm border-l-4 border-neutral-content"
        {...props}
      >
        {children}
      </blockquote>
    );
  },
  // ---------------------------------------------------------------------------
  // Code (code, inlineCode).
  // @ts-expect-error: inline is not defined in HTMLAttributes, but valid in ReactMarkdown.
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    if (match) {
      return (
        <div className="code-block-container">
          <code
            className={`language-${match[1]}`}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {children}
          </code>
        </div>
      );
    }
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    );
  },
};

export default styledComponents;
