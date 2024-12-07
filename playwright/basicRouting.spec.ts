import { type Page, expect, test } from "@playwright/test";

// Give each expect call a generous timeout.
const customTimeout = { timeout: 30000 };

test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
  await page.goto("/");
});

test.describe("Basic routing", () => {
  test("allows user to nav from Homepage to Auth SignIn page and back", async ({
    page
  }) => {
    // Click on the sign in/up link button.
    await page.click('text="Ohio State Sign In/Up"');
    await expect(page).toHaveURL("/auth/signin", customTimeout);

    // Click on the home link button.
    await page.click('text="Home"');
    await expect(page).toHaveURL("/", customTimeout);
  });

  test("allows user to nav from Homepage to Events page and back", async ({
    page
  }) => {
    // Click on the events link button.
    await page.click('text="See Upcoming Events"');
    await expect(page).toHaveURL("/events", customTimeout);

    // Click on the home link button.
    await page.click('text="Home"');
    await expect(page).toHaveURL("/", customTimeout);
  });
});
