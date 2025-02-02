import type { ComponentType, ReactNode } from "react";

type ProviderComponent<Props> = ComponentType<Props> & {
  // Optional properties for compatibility with React context providers
  displayName?: string;
};

// biome-ignore lint/suspicious/noExplicitAny: Okay to use any here
type ComponentsWithProps = [ProviderComponent<any>, Record<string, any>?][];

// Function to build providers tree
export const buildProvidersTree = (
  componentsWithProps: ComponentsWithProps,
): ComponentType<{ children: ReactNode }> => {
  const initialComponent: ComponentType<{ children: ReactNode }> = ({
    children,
  }) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }: { children: ReactNode }) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    },
    initialComponent,
  );
};
