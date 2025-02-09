import type { FormEventHandler } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { SignInFormFields } from '@/zod-schemas/sign-in-form-fields';

export interface SignInProps {
  signInServerAction: (data: SignInFormFields) => Promise<void>;
}

export interface SignInWireframeProps extends SignInFormProps {
  isEmailSent: boolean;
}

// biome-ignore format: added alignment for clarity.
export interface SignInFormProps {
  submitHandler: FormEventHandler<HTMLFormElement>;
  register     : UseFormRegister<SignInFormFields>;
  errors       : FieldErrors<SignInFormFields>;
  isDisabled   : boolean;
}
