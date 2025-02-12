import { z } from 'zod';

import { NameDotNumberSchema } from '@/zod-schemas/name-dot-number';

export const SignInFormFieldsSchema = z
  .object({
    nameDotNumber: NameDotNumberSchema,
  })
  .strict();

export type SignInFormFields = z.infer<typeof SignInFormFieldsSchema>;
