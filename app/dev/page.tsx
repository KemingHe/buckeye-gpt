'use client';

import Image from 'next/image';

import CheckYourEmailPrompt from '@/components/signIn/CheckYourEmailPrompt';
import PrivacyPolicyAndTermsAndConditions from '@/components/signIn/PrivacyPolicyAndTermsAndConditions';
import SignInForm from '@/components/signIn/SignInForm';

export default function DevPage(): JSX.Element {
  const emailSent: boolean = false;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-neutral">
      <div className="flex-grow flex flex-col justify-center items-center ">
        <div className="card bg-base-100 shadow-lg w-72">
          <figure className="pt-8">
            <Image
              src="/images/transparent-buckeye-gpt-icon-512x512px.png"
              alt="Buckeye GPT logo"
              width={75}
              height={75}
            />
          </figure>
          <div className="card-body items-center py-4 gap-3">
            <h2 className="card-title">Welcome, Buckeye!</h2>
            <div className="card-actions pt-1.5">
              {emailSent ? <CheckYourEmailPrompt /> : <SignInForm />}
            </div>
            <div className="flex justify-center items-center pt-3.5">
              <PrivacyPolicyAndTermsAndConditions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
