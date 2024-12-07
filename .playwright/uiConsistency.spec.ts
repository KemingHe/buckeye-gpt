import { type Page, expect, test } from "@playwright/test";

// Allow 30 seconds for resource-intensive expects.
const customTimeout = { timeout: 30000 };

// Allow max 2% pixel difference for screenshots.
const customDiffPixelRatio = { maxDiffPixelRatio: 0.02 };

test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
  await page.goto("/", customTimeout);
});

test.describe("Buckeye GPT ui", () => {
  test("is consistent on main page", async ({ page }: { page: Page }) => {
    await page.waitForSelector("button:has-text('send')", customTimeout);
    const image = await page.screenshot();
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });
});
