import {
  type RenderResult,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SignOutButton } from "./SignOutButton";

const mockSignOutAction = vi.fn();

describe("SignOutButton component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the sign out button with the correct text content", () => {
    render(<SignOutButton signOutAction={mockSignOutAction} />);

    const elementByText: HTMLElement = screen.getByText("Sign Out");
    expect(elementByText).toBeVisible();

    const elementByRole: HTMLElement = screen.getByRole("button", {
      name: "Sign out of your account"
    });
    expect(elementByRole).toBeVisible();
  });

  it("calls the sign out action when the button is clicked", async () => {
    render(<SignOutButton signOutAction={mockSignOutAction} />);
    const button: HTMLElement = screen.getByRole("button", {
      name: "Sign out of your account"
    });
    await waitFor(() => {
      expect(mockSignOutAction).toHaveBeenCalledTimes(0);
    });

    userEvent.click(button);
    await waitFor(() => {
      expect(mockSignOutAction).toHaveBeenCalledTimes(1);
    });

    userEvent.click(button);
    await waitFor(() => {
      expect(mockSignOutAction).toHaveBeenCalledTimes(2);
    });
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(
      <SignOutButton signOutAction={mockSignOutAction} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
