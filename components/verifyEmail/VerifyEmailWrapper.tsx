import type { JSX } from 'react';

import {
  type UseVerifyEmailReturnProps,
  useVerifyEmail,
} from '@/components/verifyEmail/useVerifyEmail';
import { VerifyEmailWireframe } from '@/components/verifyEmail/verifyEmailWireframe';

export default function VerifyEmailWrapper(): JSX.Element {
  const { isFailed }: UseVerifyEmailReturnProps = useVerifyEmail();

  return <VerifyEmailWireframe isFailed={isFailed} />;
}
