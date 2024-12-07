import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the footer with the correct content", () => {
    render(<Footer />);

    // Select the footer by its role.
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeVisible();

    // Select the text content.
    const authorContent: string = "Keming He";
    const copyRightContent: string = `© ${new Date().getFullYear()}`;
    expect(screen.getByText(authorContent)).toBeVisible();
    expect(screen.getByText(copyRightContent)).toBeVisible();
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
