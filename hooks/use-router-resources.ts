import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  type ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

// biome-ignore format: added alignment for clarity.
export interface RouterResources {
  clientRouter: AppRouterInstance;
  pathname    : string;
  searchParams: ReadonlyURLSearchParams;
}

export function useRouterResources(): RouterResources {
  const clientRouter: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  return { clientRouter, pathname, searchParams };
}
