import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],

    // Disable watch mode for routine and CI.
    watch: false,

    // Run setup file before tests.
    setupFiles: ["vitest.setup.ts"],

    // Allow tests to pass even if no test files are found.
    // passWithNoTests: true,

    // Resolve path aliases for test files, similar to tsconfig-paths.
    alias:
      // biome-ignore format: added alignment for clarity.
      {
        "@app/"       : new URL("./src/app/",         import.meta.url).pathname,
        "@components/": new URL("./src/components/",  import.meta.url).pathname,
        "@constants/" : new URL("./src/constants/",   import.meta.url).pathname,
        "@lib/"       : new URL("./src/lib/",         import.meta.url).pathname,
        "@schemas/"   : new URL("./src/schemas/",     import.meta.url).pathname,
        "@utils/"     : new URL("./src/utils/",       import.meta.url).pathname,
    }
  }
});
