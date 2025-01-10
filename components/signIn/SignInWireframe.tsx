import Image from 'next/image';
import type { JSX } from 'react';

import NextSteps from '@/components/signIn/NextSteps';
import {
  SignInForm,
  type SignInFormProps,
} from '@/components/signIn/SignInForm';

export interface SignInWireframeProps extends SignInFormProps {
  isEmailSent: boolean;
}

export function SignInWireframe(props: SignInWireframeProps): JSX.Element {
  const { isEmailSent, ...signInFormProps } = props;
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {/* NOTE: Width is manually set here and in SignInForm.tsx, refactor when ready. */}
      <div className="card bg-base-200 shadow-lg w-72">
        <figure className="pt-8">
          <Image
            src="/images/transparent-buckeye-gpt-icon-512x512px.png"
            alt="Buckeye GPT logo"
            width={75}
            height={75}
            priority={true}
          />
        </figure>
        <div className="card-body items-center py-4 gap-3">
          {/* NOTE: Current manual width setting breaks if using text-2xl or above. */}
          <h2 className="card-title">Welcome, Buckeye!</h2>
          <div className="card-actions pt-1.5">
            {isEmailSent ? <NextSteps /> : <SignInForm {...signInFormProps} />}
          </div>
        </div>
      </div>
    </main>
  );
}
