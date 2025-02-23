import type { CurrentServerUser } from '@stackframe/stack';
import { NextResponse } from 'next/server';

import { AUTH_VERIFY_EMAIL_ROUTE, HOME_ROUTE } from '@/constants/routes';
import { stackServerApp } from '@/lib/stack-auth/server/app';
import { getCallbackUrl } from '@/utils/get-callback-url';
import {
  type SignInFormFields,
  SignInFormFieldsSchema,
} from '@/zod-schemas/sign-in-form-fields';

export const POST = async (req: Request): Promise<NextResponse> => {
  // Short-circuit redirect to homepage if the user is already authenticated.
  const currentUser: CurrentServerUser | null = await stackServerApp.getUser();
  if (currentUser) return NextResponse.redirect(new URL(HOME_ROUTE, req.url));

  try {
    const data: SignInFormFields = await req.json();
    // Server-side re-validation and destructuring of the form fields.
    SignInFormFieldsSchema.parse(data);
    const { nameDotNumber }: SignInFormFields = data;

    await stackServerApp.sendMagicLinkEmail(`${nameDotNumber}@osu.edu`, {
      callbackUrl: getCallbackUrl(AUTH_VERIFY_EMAIL_ROUTE),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to send magic link email' },
      { status: 500 },
    );
  }
};
