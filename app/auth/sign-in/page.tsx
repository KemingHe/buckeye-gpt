'use client';

import type { JSX } from 'react';

import { signInServerAction } from '@/app/auth/sign-in/actions';
import { SignInWrapper } from '@/components/signIn/SignInWrapper';

export default function SignInPage(): JSX.Element {
  return <SignInWrapper signInServerAction={signInServerAction} />;
}
