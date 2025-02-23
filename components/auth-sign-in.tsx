import { zodResolver } from '@hookform/resolvers/zod';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { type JSX, useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SignInWireframe } from '@/components/auth-sign-in-wireframe';
import { AUTH_MAGIC_LINK_SEND_API_ENDPOINT } from '@/constants/api-v1-endpoints';
import { signInConfetti } from '@/utils/confetti';
import {
  type SignInFormFields,
  SignInFormFieldsSchema,
} from '@/zod-schemas/sign-in-form-fields';

export const SignIn = (): JSX.Element => {
  // Form-level state and methods.
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    setFocus,
  } = useForm<SignInFormFields>({
    criteriaMode: 'all',
    // @ts-ignore: Sign in form schema includes name.# schema, which next build will think is exessively deep.
    resolver: zodResolver(SignInFormFieldsSchema),
  });
  // Handler-level state and methods.
  const [handlerErrored, setHandlerErrored] = useState<boolean>(false);
  // NextJS client router.
  const clientRouter: AppRouterInstance = useRouter();

  // ---------------------------------------------------------------------------
  const signInHandler: SubmitHandler<SignInFormFields> = async (
    data: SignInFormFields,
  ): Promise<void> => {
    setHandlerErrored(false);
    try {
      const res: Response = await fetch(AUTH_MAGIC_LINK_SEND_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Handle server errors.
      if (!res.ok) {
        throw new Error(`Failed to send magic link email: ${res.statusText}`);
      }

      // Handle redirects.
      if (res.redirected) {
        const redirectUrl: string = res.url;
        clientRouter.push(redirectUrl);
        return;
      }

      // Catch and process server errors.
    } catch (error) {
      setHandlerErrored(true);
      console.error(error);
      toast.error('Server error. Please try again later.');
    }
  };

  function isEmailSent(): boolean {
    return isSubmitSuccessful && !handlerErrored;
  }

  function isDisabled(): boolean {
    return isSubmitting || isEmailSent();
  }

  // ---------------------------------------------------------------------------
  // Auto-focus on the first (and in this case, only) input when:
  // - The form is first rendered.
  // - The form is submitted and the handler errored.
  useEffect(() => {
    setFocus('nameDotNumber');
  }, [setFocus, signInHandler]);

  // Shoot confetti when the email is sent successfully.
  useEffect(() => {
    if (isEmailSent()) signInConfetti();
  }, [isSubmitSuccessful, handlerErrored]);

  // ---------------------------------------------------------------------------
  return (
    <SignInWireframe
      isEmailSent={isEmailSent()}
      submitHandler={handleSubmit(signInHandler)}
      register={register}
      errors={errors}
      isDisabled={isDisabled()}
    />
  );
};
