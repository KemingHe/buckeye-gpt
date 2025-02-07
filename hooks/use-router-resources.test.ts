import { renderHook } from '@testing-library/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Mock } from 'vitest';

import { useRouterResources } from '@/hooks/use-router-resources';

// IMPORTANT: Must first mock into vi.fn() before modding the return value.
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
}));

const mockUserRouterReturnValue: string = 'test-useRouter';
const mockUsePathnameReturnValue: string = 'test-usePathname';
const mockUseSearchParamsReturnValue: string = 'test-useSearchParams';

describe('The useRouterResources hook', () => {
  it('returns the clientRouter, pathname, and searchParams from next/navigation', () => {
    (useRouter as Mock).mockReturnValue(mockUserRouterReturnValue);
    (usePathname as Mock).mockReturnValue(mockUsePathnameReturnValue);
    (useSearchParams as Mock).mockReturnValue(mockUseSearchParamsReturnValue);
    const { result } = renderHook(() => useRouterResources());

    expect(result.current).toEqual({
      clientRouter: mockUserRouterReturnValue,
      pathname: mockUsePathnameReturnValue,
      searchParams: mockUseSearchParamsReturnValue,
    });
  });
});
