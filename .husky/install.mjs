// Skip husky installation on CI.
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
if (process.env.NODE_ENV === "production" || process.env.CI) {
  console.log("Husky installation skipped.");
  process.exit(0);
}

const husky = (await import("husky")).default;
console.log("Husky installed.");
console.log(husky());
