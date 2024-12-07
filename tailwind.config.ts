import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"]
  }
} satisfies Config;
