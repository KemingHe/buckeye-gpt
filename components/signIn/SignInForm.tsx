import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function SignInForm(): JSX.Element {
  return (
    <form className="flex flex-col justify-center items-center gap-2.5">
      <label className="form-control" htmlFor="ohio-state-username">
        <div className="label -mb-2">
          <span className="label-text text-xs">Ohio State name.#</span>
        </div>
        <div className="join">
          <input
            id="ohio-state-username"
            name="ohio-state-username"
            type="text"
            placeholder="buckeye.1"
            className="join-item input input-sm input-bordered w-36"
            required
            aria-required="true"
          />
          <div className="join-item btn btn-sm no-animation p-2">
            <span className="font-normal">@osu.edu</span>
          </div>
        </div>
      </label>
      <div className="form-control w-full">
        <button type="submit" className="btn btn-primary btn-sm">
          Next
          <ArrowRightIcon className="size-4 -ms-1" />
        </button>
      </div>
    </form>
  );
}
