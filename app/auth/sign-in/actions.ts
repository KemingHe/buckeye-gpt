'use server';

import {
  type SignInFormFields,
  SignInFormFieldsSchema,
} from '@/components/signIn/SignInFormFieldsSchema';
import { AUTH_VERIFY_EMAIL_ROUTE } from '@/constants/routeConstants';
import stackServerApp from '@/lib/stackAuth/server/stackServerApp';
import getCallbackUrl from '@/utils/getCallbackUrl';

export async function signInServerAction(
  data: SignInFormFields,
): Promise<void> {
  // Server-side re-validation and destructing of the form fields.
  SignInFormFieldsSchema.parse(data);
  const { nameDotNumber }: SignInFormFields = data;

  await stackServerApp.sendMagicLinkEmail(`${nameDotNumber}@osu.edu`, {
    callbackUrl: getCallbackUrl(AUTH_VERIFY_EMAIL_ROUTE),
  });
}
