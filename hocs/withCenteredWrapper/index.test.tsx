import { type RenderResult, render, screen } from '@testing-library/react';

import { withCenteredWrapper } from '@/hocs/withCenteredWrapper';

describe('withCenteredWrapper HOC', () => {
  const MockComp = ({ testClassName = '', testInnerText = '' }) => {
    return <div className={testClassName}>Test Component {testInnerText}</div>;
  };
  const WrappedMockComp = withCenteredWrapper(MockComp);

  it('renders the wrapped component', () => {
    render(<WrappedMockComp />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('passes props to wrapped component', () => {
    const { container }: RenderResult = render(
      <WrappedMockComp testClassName="test-class" testInnerText="test value" />,
    );

    const divElement: HTMLElement | null = container.querySelector('div');
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass('test-class');
    expect(divElement).toHaveTextContent('Test Component test value');
  });

  it('creates a main parent element and applies centered wrapper classes', () => {
    const { container }: RenderResult = render(<WrappedMockComp />);
    const mainElement: HTMLElement | null = container.querySelector('main');

    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'w-full',
      'h-full',
    );
  });

  it('matches the latest snapshot', () => {
    const { container }: RenderResult = render(
      <WrappedMockComp testClassName="test-class" testInnerText="test value" />,
    );
    expect(container).toMatchSnapshot();
  });
});
