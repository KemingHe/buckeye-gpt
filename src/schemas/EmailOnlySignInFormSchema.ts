import { z } from "zod";

export const EmailOnlySignInFormSchema = z
  .object(
    {
      email: z
        .string({ message: "Please enter a valid email." })
        .email({ message: "Please enter a valid email." })
    },
    { message: "Please complete the form as instructed." }
  )
  .strict({ message: "Please complete the form as instructed." });

export type SignInFormType = z.infer<typeof EmailOnlySignInFormSchema>;
