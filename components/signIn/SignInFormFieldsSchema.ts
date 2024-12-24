import { z } from 'zod';

import { NameDotNumberSchema } from '@/schemas/NameDotNumberSchema';

export const SignInFormFieldsSchema = z.object({
  nameDotNumber: NameDotNumberSchema,
});

export type SignInFormFields = z.infer<typeof SignInFormFieldsSchema>;
