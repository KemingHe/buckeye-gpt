export default function LoadingCard({
  message
}: Readonly<{ message: string }>): JSX.Element {
  return (
    <output aria-live="polite" className="card shadow-lg">
      <div className="card-body flex flex-col justify-center items-center">
        <div className="card-title h-12">
          <span
            aria-hidden={true}
            className="loading loading-spinner loading-lg"
          />
        </div>
        <p aria-label="Loading message" className="text-center">
          {message}
        </p>
      </div>
    </output>
  );
}
