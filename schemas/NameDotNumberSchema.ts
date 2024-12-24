import { NAME_DOT_NUM_PATTERN } from '@keminghe/osu';
import { z } from 'zod';

const invalidErrorMessage: string = 'Enter a valid name.#';

export const NameDotNumberSchema = z
  .string({ message: invalidErrorMessage })
  .regex(NAME_DOT_NUM_PATTERN, { message: invalidErrorMessage });

export type NameDotNumber = z.infer<typeof NameDotNumberSchema>;
