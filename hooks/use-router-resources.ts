import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  type ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import type { RouterResources } from '@/types/router-resources-props';

export const useRouterResources = (): RouterResources => {
  const clientRouter: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  return { clientRouter, pathname, searchParams };
};
