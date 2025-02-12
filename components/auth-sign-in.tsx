import { zodResolver } from '@hookform/resolvers/zod';
import { type JSX, useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SignInWireframe } from '@/components/auth-sign-in-wireframe';
import type { SignInProps } from '@/types/auth-sign-in-props';
import { signInConfetti } from '@/utils/confetti';
import {
  type SignInFormFields,
  SignInFormFieldsSchema,
} from '@/zod-schemas/sign-in-form-fields';

export const SignIn = ({ signInServerAction }: SignInProps): JSX.Element => {
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

  // ---------------------------------------------------------------------------
  const signInHandler: SubmitHandler<SignInFormFields> = async (
    data: SignInFormFields,
  ): Promise<void> => {
    setHandlerErrored(false);
    try {
      await signInServerAction(data);
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
