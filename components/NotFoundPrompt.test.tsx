import { type RenderResult, render, screen } from '@testing-library/react';

import { NotFoundPrompt } from '@/components/NotFoundPrompt';

describe('NotFoundPrompt component', () => {
  it('renders a 404 error message and links to homepage and sign-in', () => {
    render(<NotFoundPrompt />);

    const notFoundCodeElement = screen.getByText('404');
    expect(notFoundCodeElement).toBeVisible();

    const notFoundMessageElement = screen.getByText('Page Not Found');
    expect(notFoundMessageElement).toBeVisible();

    const navigationPromptElement = screen.getByText(
      'Are you looking for one of these pages?',
    );
    expect(navigationPromptElement).toBeVisible();

    const buckeyeGPTButton = screen.getByRole('link', { name: 'Buckeye GPT' });
    expect(buckeyeGPTButton).toBeVisible();

    const signInButton = screen.getByRole('link', { name: 'Sign In' });
    expect(signInButton).toBeVisible();
  });

  it('matches the snapshot', () => {
    const { asFragment }: RenderResult = render(<NotFoundPrompt />);
    expect(asFragment()).toMatchSnapshot();
  });
});
