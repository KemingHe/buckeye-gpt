import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavLinkButton } from "./NavLinkButton";

describe("NavLinkButton component", () => {
  it("renders the nav link button with the correct href and text content", () => {
    render(<NavLinkButton href="/" text="Home" />);

    const elementByText: HTMLElement = screen.getByText("Home");
    expect(elementByText).toBeVisible();

    const elementByRole: HTMLElement = screen.getByRole("link", {
      name: "Home"
    });
    expect(elementByRole).toBeVisible();
    expect(elementByRole).toHaveAttribute("href", "/");
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(
      <NavLinkButton href="/foo?bar=1" text="FooBar1" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
