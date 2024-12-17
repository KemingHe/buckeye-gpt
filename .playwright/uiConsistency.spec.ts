import {
  // type BrowserContext,
  type Page,
  expect,
  test,
} from '@playwright/test';

// Allow 30 seconds for resource-intensive expects and waits.
const customTimeout = { timeout: 30000 };

const hydrationTimeAllowance: number = 2000;

test.beforeEach(
  async ({
    page,
    // context
  }: {
    page: Page;
    // context: BrowserContext
  }): Promise<void> => {
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

    // Go to the main page and wait for full hydration.
    await page.goto('/', customTimeout);
    await page.waitForLoadState('networkidle', customTimeout);
  },
);

test.describe('Buckeye GPT ui', () => {
  test('is consistent on main page', async ({ page }: { page: Page }) => {
    // const expandTextareaButton = await page.locator(
    //   "[aria-label='Expand textarea']"
    // );
    // expect(expandTextareaButton).toBeVisible();

    await page.waitForTimeout(hydrationTimeAllowance);

    const image = await page.screenshot();
    expect(image).toMatchSnapshot();
  });
});
