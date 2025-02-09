import { LoadingSpinner } from '@/components/loading';
import { withCenteredWrapper } from '@/hocs/with-centered-wrapper';

export default withCenteredWrapper(LoadingSpinner);

// IMPORTANT: Do not delete this file.
// Stack uses React Suspense, which will render this page while user data is being fetched.
// See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
