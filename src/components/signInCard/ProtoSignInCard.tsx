"use client";

import type { FormEvent } from "react";

interface ProtoSignInCardProps {
  signInAction: (formData: FormData) => Promise<void>;
}

export default function ProtoSignInCard({
  signInAction
}: ProtoSignInCardProps): JSX.Element {
  async function submitHandler(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const formData: FormData = new FormData(event.currentTarget);
    await signInAction(formData);
  }

  return (
    <form
      aria-labelledby="signInCardTitle"
      className="card shadow-lg"
      onSubmit={submitHandler}
    >
      <div className="card-body flex flex-col justify-center items-center">
        <h2 id="signInCardTitle" className="card-title text-lg font-bold">
          Sign In
        </h2>
        <div className="space-y-2">
          <div className="form-control">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              aria-required="true"
              className="input input-bordered w-full h-12"
              id="email"
              name="email"
              placeholder="buckeye.1@osu.edu"
              required
              type="email"
            />
          </div>
          <button
            className="btn btn-primary w-full h-12 flex items-center justify-center"
            type="submit"
          >
            Sign In/Up
          </button>
        </div>
      </div>
    </form>
  );
}
