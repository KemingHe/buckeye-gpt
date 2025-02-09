'use server';

import { AUTH_VERIFY_EMAIL_ROUTE } from '@/constants/routes';
import { stackServerApp } from '@/lib/stack-auth/server/app';
import { getCallbackUrl } from '@/utils/get-callback-url';
import {
  type SignInFormFields,
  SignInFormFieldsSchema,
} from '@/zod-schemas/sign-in-form-fields';

export const signInServerAction = async (
  data: SignInFormFields,
): Promise<void> => {
  // Server-side re-validation and destructing of the form fields.
  SignInFormFieldsSchema.parse(data);
  const { nameDotNumber }: SignInFormFields = data;

  await stackServerApp.sendMagicLinkEmail(`${nameDotNumber}@osu.edu`, {
    callbackUrl: getCallbackUrl(AUTH_VERIFY_EMAIL_ROUTE),
  });
};
