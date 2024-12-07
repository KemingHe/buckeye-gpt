import { type RenderResult, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import NotificationBell from "./NotificationBell";

describe("NotificationBell client component", () => {
  it("renders a button with a bell icon and the correct sr-only text", () => {
    render(<NotificationBell />);
    const buttonElement: HTMLElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("View notifications");
  });

  // TODO: Add test for clicking the button via userEvent.

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<NotificationBell />);
    expect(asFragment()).toMatchSnapshot();
  });
});
