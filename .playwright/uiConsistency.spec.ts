import { type BrowserContext, type Page, expect, test } from "@playwright/test";

// Allow 30 seconds for resource-intensive expects.
const customTimeout = { timeout: 30000 };

// Allow max 1% pixel difference for screenshots.
const customDiffPixelRatio = { maxDiffPixelRatio: 0.01 };

test.beforeEach(
  async ({
    page,
    context
  }: { page: Page; context: BrowserContext }): Promise<void> => {
    /* Set the request headers to disable caching. */
    // await page.route("**/*", (route) => {
    //   route.continue({
    //     headers: {
    //       ...route.request().headers(),
    //       "Cache-Control": "no-cache, no-store, must-revalidate",
    //       Pragma: "no-cache",
    //       Expires: "0"
    //     }
    //   });
    // });

    /* Clear all cookies and cache storage. */
    // await context.clearCookies();
    // await context.clearPermissions();
    // await context.storageState({ path: undefined });

    // Go to the main page.
    await page.goto("/", customTimeout);
  }
);

test.describe("Buckeye GPT ui", () => {
  test("is consistent on main page", async ({ page }: { page: Page }) => {
    await page.waitForSelector("button:has-text('send')", customTimeout);

    // const expandTextareaButton = await page.locator(
    //   "[aria-label='Expand textarea']"
    // );
    // expect(expandTextareaButton).toBeVisible();

    const image = await page.screenshot();
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });
});
