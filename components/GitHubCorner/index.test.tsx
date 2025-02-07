import { type RenderResult, render, screen } from '@testing-library/react';

import { GitHubCorner } from '@/components/GitHubCorner';
import { GITHUB_REPO_LINK } from '@/constants/externalLinkConstants';

describe('GitHubCorner', () => {
  it('renders without crashing', () => {
    render(<GitHubCorner />);
    expect(screen.getByLabelText('View source on GitHub')).toBeInTheDocument();
  });

  it('renders link with correct attributes', () => {
    render(<GitHubCorner />);
    const linkElement: HTMLElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', GITHUB_REPO_LINK);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkElement).toHaveAttribute('aria-label', 'View source on GitHub');
  });

  it('renders SVG with correct attributes', () => {
    const { container }: RenderResult = render(<GitHubCorner />);
    const svgElement: SVGSVGElement | null = container.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '80');
    expect(svgElement).toHaveAttribute('height', '80');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 250 250');
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
  });

  // Only HTML and SVG elements are selectable (by role or query).
  // Thus, manually confirm correct CSS and snapshot the rendered component.

  it('matches the latest snapshot', () => {
    const { asFragment }: RenderResult = render(<GitHubCorner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
