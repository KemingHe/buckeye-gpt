import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useLoading } from "./useLoading";

describe("useLoading react hook", () => {
  it("returns the correct initial state, defaults to false", () => {
    const { result } = renderHook(() => useLoading());
    expect(result.current.isLoading).toBe(false);
  });

  it("returns the correct initial state, when specified to false", () => {
    const { result } = renderHook(() => useLoading(false));
    expect(result.current.isLoading).toBe(false);
  });

  it("returns the correct initial state, when specified to true", () => {
    const { result } = renderHook(() => useLoading(true));
    expect(result.current.isLoading).toBe(true);
  });

  it("updates state to true when starts loading", () => {
    const { result } = renderHook(() => useLoading());
    act(() => {
      result.current.startLoading();
    });
    expect(result.current.isLoading).toBe(true);
  });

  it("updates state to false when stops loading", () => {
    const { result } = renderHook(() => useLoading());
    act(() => {
      result.current.startLoading();
      result.current.stopLoading();
    });
    expect(result.current.isLoading).toBe(false);
  });
});
