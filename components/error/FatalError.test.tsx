import { type RenderResult, render, screen } from '@testing-library/react';

import FatalError from '@/components/error/FatalError';

describe('FatalError component', () => {
  it('renders an accessible and visible fatal error message', () => {
    render(<FatalError />);

    // Select the element by its "alert" role.
    const elementByRole = screen.getByRole('alert');
    expect(elementByRole).toBeVisible();

    // Select the element by its text content.
    const elementByText = screen.getByText('Service Unavailable');
    expect(elementByText).toBeVisible();
  });

  it('matches the snapshot', () => {
    const { asFragment }: RenderResult = render(<FatalError />);
    expect(asFragment()).toMatchSnapshot();
  });
});
