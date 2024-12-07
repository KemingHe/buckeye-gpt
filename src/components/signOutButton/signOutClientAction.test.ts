import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";

// Mock firebase/auth module.
vi.mock("firebase/auth", () => {
  return {
    signOut: vi.fn()
  };
});

// Mock @lib/firebase/firebaseClientApp module.
vi.mock("@lib/firebase/firebaseClientApp", () => {
  return {
    fbAuth: {}
  };
});

// Import the mocked module exports.
import { fbAuth } from "@lib/firebase/firebaseClientApp";
import { signOut } from "firebase/auth";

// Import the function under test and the mocked modules.
import signOutClientAction from "./signOutClientAction";

describe("signOutClientAction", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call signOut with fbAuth", () => {
    signOutClientAction();
    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(fbAuth);

    signOutClientAction();
    expect(signOut).toHaveBeenCalledTimes(2);
    expect(signOut).toHaveBeenCalledWith(fbAuth);
  });

  it("should handle errors thrown by signOut", () => {
    const testError = new Error("Test error");
    (signOut as Mock).mockImplementationOnce(() => {
      throw testError;
    });

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    signOutClientAction();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Error at "${signOutClientAction.name}" when invoked: "${testError}".`
    );

    consoleErrorSpy.mockRestore();
  });
});
