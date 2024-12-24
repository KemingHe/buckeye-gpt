import type { JSX } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import rehypeHighlight from "rehype-highlight";
// TODO: Add code highlighting. Rehype-highlight doesn't work out of the box.

import styledComponents from '@/components/styledMarkdown/styledComponents';

export default function StyledMarkdown({
  children,
}: Readonly<{ children: string }>): JSX.Element {
  return (
    <Markdown
      components={styledComponents}
      remarkPlugins={[remarkGfm]}
      // rehypePlugins={[rehypeHighlight]}
    >
      {children}
    </Markdown>
  );
}
