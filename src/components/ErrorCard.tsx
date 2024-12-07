import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ErrorCard({
  message
}: Readonly<{ message: string }>): JSX.Element {
  return (
    <div aria-live="assertive" className="card shadow-lg" role="alert">
      <div className="card-body flex flex-col justify-center items-center">
        <ExclamationTriangleIcon className="card-title text-red-500 h-12" />
        <p aria-label="Error message" className="text-center">
          {message}
        </p>
      </div>
    </div>
  );
}
