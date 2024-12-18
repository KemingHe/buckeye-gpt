import Link from 'next/link';

export default function PrivacyPolicyAndTermsAndConditions(): JSX.Element {
  return (
    <p className="text-justify leading-tight text-xs">
      By signing in, you acknowledge that you have read and agree to our&nbsp;
      <Link className="link" href={PRIVACY_POLICY_LINK}>
        Privacy Policy
      </Link>
      &nbsp;and&nbsp;
      <Link className="link" href={TERMS_CONDITIONS_LINK}>
        Terms & Conditions
      </Link>
      .
    </p>
  );
}

const PRIVACY_POLICY_LINK = '/dev';
const TERMS_CONDITIONS_LINK = '/dev';
