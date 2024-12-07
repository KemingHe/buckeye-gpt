import { z } from "zod";

export const BROWSER_OPTIONS_ARRAY: string[] = [
  "Desktop Chrome",
  "Desktop Firefox",
  "Desktop Safari",
  "Desktop Microsoft Edge",
  "Desktop Other (please specify)",
  "Mobile Chrome",
  "Mobile Safari",
  "Mobile Other (please specify)"
];

export const BrowserOptionsSchema = z
  .array(
    z
      .string({ message: "Please select a valid browser." })
      .refine((str) => BROWSER_OPTIONS_ARRAY.includes(str), {
        message: "Please select a valid browser."
      }),
    { message: "Please select a valid browser." }
  )
  .nonempty({ message: "Please select at least one browser." })
  .refine((arr) => new Set(arr).size === arr.length, {
    message: "Duplicate browser selections are not allowed."
  });

export type BrowserOptionsType = z.infer<typeof BrowserOptionsSchema>;
