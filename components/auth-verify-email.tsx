import type { JSX } from 'react';

import { VerifyEmailWireframe } from '@/components/auth-verify-email-wireframe';
import { useVerifyEmail } from '@/hooks/use-verify-email';
import type { VerifyEmailStatus } from '@/types/auth-verify-email-props';

export const VerifyEmail = (): JSX.Element => {
  const { isFailed }: VerifyEmailStatus = useVerifyEmail();

  return <VerifyEmailWireframe isFailed={isFailed} />;
};
