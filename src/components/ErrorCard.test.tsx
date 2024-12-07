import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ErrorCard from "./ErrorCard";

const errorMessage: string = "This is an error message.";

describe("ErrorCard client component", () => {
  it("renders a card with an error icon and the correct message", () => {
    render(<ErrorCard message={errorMessage} />);

    // Select the error card by its role.
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeVisible();

    // Select the error icon by its class name.
    const iconElement = alertElement.querySelector(
      ".card-title.text-red-500.h-12"
    );
    expect(iconElement).toBeInTheDocument();

    // Select the message by its text content.
    const messageElement = screen.getByText(errorMessage);
    expect(messageElement).toBeVisible();
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(
      <ErrorCard message={errorMessage} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
