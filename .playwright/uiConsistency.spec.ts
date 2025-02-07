import {
  // type BrowserContext,
  type Page,
  type PageScreenshotOptions,
  expect,
  test,
} from '@playwright/test';

import {
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_EMAIL_ROUTE,
  HOME_ROUTE,
} from '../constants/routeConstants';

// Allow 30 seconds for resource-intensive expects and waits.
const customPageLoadTimeout = { timeout: 30000 };
const additionalPageLoadTimeout: number = 1500;
// Avoid screenshotting versioning components on page.
const customScreenshotOptions: PageScreenshotOptions = {
  style: '.no-screenshot{display:none !important}',
};
// Allow max 0% deviation in pixel diff.
const customDiffPixelRatio = { maxDiffPixelRatio: 0 };

// test.beforeEach(
//   async ({
//     page,
//     // context
//   }: {
//     page: Page;
//     // context: BrowserContext
//   }): Promise<void> => {
//     /* Set the request headers to disable caching. */
//     // await page.route("**/*", (route) => {
//     //   route.continue({
//     //     headers: {
//     //       ...route.request().headers(),
//     //       "Cache-Control": "no-cache, no-store, must-revalidate",
//     //       Pragma: "no-cache",
//     //       Expires: "0"
//     //     }
//     //   });
//     // });

//     /* Clear all cookies and cache storage. */
//     // await context.clearCookies();
//     // await context.clearPermissions();
//     // await context.storageState({ path: undefined });

//     // Go to the main page and wait for full hydration.
//     await page.goto('/', customTimeout);
//     await page.waitForLoadState('networkidle', customTimeout);
//   },
// );

test.describe('Buckeye GPT UI is consistent with latest screenshot on...', () => {
  test('homepage', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto(HOME_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    // const expandTextareaButton = await page.locator(
    //   "[aria-label='Expand textarea']"
    // );
    // expect(expandTextareaButton).toBeVisible();

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('sign-in page', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto(AUTH_SIGN_IN_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('verify-email page (default failure case where verify code is not available)', async ({
    page,
  }: { page: Page }): Promise<void> => {
    await page.goto(AUTH_VERIFY_EMAIL_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('not-found page', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto('/not-exist', customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });
});
