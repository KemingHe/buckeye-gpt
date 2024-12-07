import { z } from "zod";

import { BrowserOptionsSchema } from "@schemas/BrowserOptionsSchema";

export const BugReportFormSchema = z
  .object(
    {
      name: z.nullable(
        z
          .string({ message: "Please enter a valid name." })
          .min(1, { message: "Please enter your name." })
      ),
      email: z.nullable(
        z
          .string({ message: "Please enter a valid email." })
          .email({ message: "Please enter a valid email." })
      ),
      environment: BrowserOptionsSchema,
      expectedBehavior: z
        .string({ message: "Please enter a valid text description." })
        .min(1, { message: "Please describe the expected behavior." }),
      actualBehavior: z
        .string({ message: "Please enter a valid text description." })
        .min(1, { message: "Please describe the actual behavior." })
    },
    { message: "Please complete the form as instructed." }
  )
  .strict({ message: "Please complete the form as instructed." });

export type BugReportFormType = z.infer<typeof BugReportFormSchema>;
