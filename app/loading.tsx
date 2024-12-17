import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading(): JSX.Element {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
