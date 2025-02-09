'use client';

import type { JSX } from 'react';

import { signInServerAction } from '@/app/auth/sign-in/actions';
import { SignIn } from '@/components/auth-sign-in';

const Page = (): JSX.Element => {
  return <SignIn signInServerAction={signInServerAction} />;
};

export default Page;
