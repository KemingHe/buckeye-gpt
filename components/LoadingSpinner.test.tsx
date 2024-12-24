import { type RenderResult, render, screen } from '@testing-library/react';

import { LoadingSpinner } from '@/components/LoadingSpinner';

describe('LoadingSpinner component', () => {
  it('renders an accessible and visible loading spinner', () => {
    render(<LoadingSpinner />);

    // Select the element by its "status" role.
    const elementByStatus = screen.getByRole('status');
    expect(elementByStatus).toBeVisible();

    // Select the element by its text content.
    const elementByText = screen.getByText('Loading...');
    expect(elementByText).toBeVisible();
  });

  it('matches the snapshot', () => {
    const { asFragment }: RenderResult = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
