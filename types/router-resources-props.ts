import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ReadonlyURLSearchParams } from 'next/navigation';

// biome-ignore format: added alignment for clarity.
export interface RouterResources {
  clientRouter: AppRouterInstance;
  pathname    : string;
  searchParams: ReadonlyURLSearchParams;
}
