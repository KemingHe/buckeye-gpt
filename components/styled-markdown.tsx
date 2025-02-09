import type { JSX } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import rehypeHighlight from "rehype-highlight";
// TODO: Add code highlighting. Rehype-highlight doesn't work out of the box.

import { components } from '@/components/styled-markdown-components';
import type { StyledMarkdownProps } from '@/types/styled-markdown-props';

export const StyledMarkdown = ({
  children,
}: StyledMarkdownProps): JSX.Element => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      // rehypePlugins={[rehypeHighlight]}
    >
      {children}
    </Markdown>
  );
};
