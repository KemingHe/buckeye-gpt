// Skip husky installation on CI.
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
if (
  process.env.NODE_ENV === 'production' ||
  process.env.CI ||
  process.env.CI === 'true' ||
  process.env.GITHUB_ACTIONS ||
  process.env.GITHUB_ACTIONS === 'true'
) {
  console.log('CI environment detected:', {
    NODE_ENV: process.env.NODE_ENV,
    CI: process.env.CI,
    GITHUB_ACTIONS: process.env.GITHUB_ACTIONS,
  });
  console.log('Husky installation skipped.');
  process.exit(0);
}

const husky = (await import('husky')).default;
console.log('Husky installed.');
console.log(husky());
