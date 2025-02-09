import type { ComponentType } from 'react';

export const withCenteredWrapper = <P extends object>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const WrappedComponent = (props: P) => (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Component {...props} />
    </main>
  );

  return WrappedComponent;
};
