import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TechSupportLinkIcon from "./TechSupportLinkIcon";

describe("TechSupportLinkIcon component", () => {
  it("renders a link icon with the correct href and sr-only text", () => {
    render(<TechSupportLinkIcon />);

    const elementByRole: HTMLElement = screen.getByRole("link");
    expect(elementByRole).toBeVisible();
    expect(elementByRole).toHaveAttribute("href", "/tech-support");

    const elementBySR: HTMLElement = screen.getByText(
      "Link to the technical support page"
    );
    expect(elementBySR).toBeVisible();
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<TechSupportLinkIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
