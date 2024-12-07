import {
  type RenderResult,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle component", () => {
  it("renders the toggle theme label and checkbox", () => {
    render(<ThemeToggle />);

    // Select the label by its text.
    const labelElement = screen.getByText("Toggle Theme");
    expect(labelElement).toBeVisible();

    // Select the checkbox by its role.
    const checkboxElement = screen.getByRole("checkbox", {
      name: "Toggle theme"
    });
    expect(checkboxElement).toBeVisible();
  });

  it("toggles the theme when the checkbox is clicked", async () => {
    render(<ThemeToggle />);

    // Select the checkbox by its role.
    const checkboxElement = screen.getByRole("checkbox", {
      name: "Toggle theme"
    });

    // IMPORTANT: use waitFor to handle the asynchronous state change.

    // Click the checkbox to toggle the theme to dark.
    userEvent.click(checkboxElement);
    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    });

    // Click the checkbox again to toggle the theme back to light.
    userEvent.click(checkboxElement);
    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute("data-theme", "light");
    });
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<ThemeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
