import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.?(c|m)[jt]s?(x)'],

    // Disable watch mode for routine and CI.
    watch: false,

    // Run setup file before tests.
    setupFiles: ['vitest.setup.ts'],

    // Allow tests to pass even if no test files are found.
    // passWithNoTests: true,
  },
});
