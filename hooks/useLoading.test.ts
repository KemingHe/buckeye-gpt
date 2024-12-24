import { act, renderHook } from '@testing-library/react';

import { useLoading } from '@/hooks/useLoading';

describe('The useLoading custom react hook', () => {
  it('mounts with the correct initial state, defaults to false', () => {
    const { result } = renderHook(() => useLoading());
    expect(result.current.isLoading).toBe(false);
  });

  it('mounts with the correct initial state, true', () => {
    const { result } = renderHook(() => useLoading(true));
    expect(result.current.isLoading).toBe(true);
  });

  it('mounts with the correct initial state, false', () => {
    const { result } = renderHook(() => useLoading(false));
    expect(result.current.isLoading).toBe(false);
  });

  it('after calling startLoading, isLoading is true', () => {
    const { result } = renderHook(() => useLoading());
    act(() => {
      result.current.startLoading();
    });
    expect(result.current.isLoading).toBe(true);
  });

  it('after calling stopLoading, isLoading is false', () => {
    const { result } = renderHook(() => useLoading());
    act(() => {
      result.current.stopLoading();
    });
    expect(result.current.isLoading).toBe(false);
  });

  it('remains consistent after multiple calls to startLoading and stopLoading', () => {
    const { result } = renderHook(() => useLoading());
    act(() => {
      result.current.startLoading();
      result.current.startLoading();
    });
    expect(result.current.isLoading).toBe(true);
    act(() => {
      result.current.stopLoading();
      result.current.stopLoading();
    });
    expect(result.current.isLoading).toBe(false);
    act(() => {
      result.current.startLoading();
    });
    expect(result.current.isLoading).toBe(true);
  });
});
