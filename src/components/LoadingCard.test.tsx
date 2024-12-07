import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LoadingCard from "./LoadingCard";

const loadingMessage: string = "This is a loading message.";

describe("LoadingCard component", () => {
  it("renders the loading spinner and message", () => {
    render(<LoadingCard message={loadingMessage} />);

    // Select the loading card by its role.
    const statusElement = screen.getByRole("status");
    expect(statusElement).toBeVisible();

    // Select the loading spinner by its class name.
    const spinnerElement = statusElement.querySelector(
      ".loading.loading-spinner.loading-lg"
    );
    expect(spinnerElement).toBeInTheDocument();

    // Select the message by its text content.
    const messageElement = screen.getByText(loadingMessage);
    expect(messageElement).toBeVisible();
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(
      <LoadingCard message={loadingMessage} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
