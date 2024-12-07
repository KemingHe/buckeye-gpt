"use client";

import type { FormEvent } from "react";

interface ProtoSignUpCardProps {
  signUpAction: (formData: FormData) => Promise<void>;
}

export default function ProtoSignUpCard({
  signUpAction
}: ProtoSignUpCardProps): JSX.Element {
  async function submitHandler(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const formData: FormData = new FormData(event.currentTarget);
    await signUpAction(formData);
  }

  return (
    <form
      aria-labelledby="signUpCardTitle"
      className="card shadow-lg"
      onSubmit={submitHandler}
    >
      <div className="card-body flex flex-col justify-center items-center">
        <h2 id="signUpCardTitle" className="card-title text-lg font-bold">
          Proto Sign Up
        </h2>
        <div className="space-y-2">
          <div className="form-control">
            <label className="label" htmlFor="fullName">
              Full Name
            </label>
            <input
              aria-required="true"
              id="fullName"
              name="fullName"
              placeholder="Brutus Buckeye"
              required
              type="text"
              className="input input-bordered w-full h-12"
            />
          </div>
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
          <div className="form-control">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              aria-required="true"
              className="input input-bordered w-full h-12"
              id="password"
              name="password"
              required
              type="password"
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
