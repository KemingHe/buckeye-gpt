// Skip husky installation in prod env and CI.
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
if (process.env.NODE_ENV === 'production') {
  console.log('Production env detected, Husky installation skipped.');
  process.exit(0);
}

// NOTE: GitHub Actions set CI and GITHUB_ACTIONS to string 'true'.
if (process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true') {
  console.log('CI env detected, Husky installation skipped.');
  process.exit(0);
}

const husky = (await import('husky')).default;
console.log('Husky installed.');
console.log(husky());
