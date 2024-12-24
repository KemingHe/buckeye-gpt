import type { ComponentType, JSX } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: HOCs are expected to have any as a prop type.
type WithCenteredWrapperReturnType = (props: any) => JSX.Element;

export default function withCenteredWrapper(
  Component: ComponentType,
): WithCenteredWrapperReturnType {
  // biome-ignore lint/suspicious/noExplicitAny: HOCs are expected to have any as a prop type.
  return (props: any) => (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Component {...props} />
    </main>
  );
}
