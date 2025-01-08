import { ArrowRightIcon } from '@heroicons/react/16/solid';
import type { FormEventHandler, JSX } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import LegalNotice from '@/components/signIn/LegalNotice';
import type { SignInFormFields } from '@/components/signIn/SignInFormFieldsSchema';

// biome-ignore format: added alignment for clarity.
export interface SignInFormProps {
  submitHandler: FormEventHandler<HTMLFormElement>;
  register     : UseFormRegister<SignInFormFields>;
  errors       : FieldErrors<SignInFormFields>;
  isDisabled   : boolean;
}

export function SignInForm({
  submitHandler,
  register,
  errors,
  isDisabled,
}: SignInFormProps): JSX.Element {
  const nameDotNumberInputId: string = 'name-dot-number';
  const nameDotNumberInputLabelId: string = `${nameDotNumberInputId}-label`;

  return (
    <form
      className="flex flex-col justify-center items-center gap-4"
      onSubmit={submitHandler}
    >
      <label className="form-control" htmlFor="ohio-state-username">
        <div className="label -mb-1">
          <span
            id={nameDotNumberInputLabelId}
            className={`label-text text-sm ${errors.nameDotNumber ? 'text-error' : ''}`}
          >
            {errors.nameDotNumber
              ? 'Enter a valid name.#'
              : 'Ohio State name.#'}
          </span>
        </div>
        <div className="join">
          {/* NOTE: Width is manually set here, refactor when ready. */}
          {/* IMPORTANT: 'register' sets the name attr for the element, do NOT re-set it! */}
          <input
            {...register('nameDotNumber')}
            id={nameDotNumberInputId}
            type="text"
            placeholder="buckeye.1"
            className={`join-item input input-sm input-bordered ${errors.nameDotNumber ? 'input-error' : ''} focus:border-none w-36`}
            disabled={isDisabled}
            required
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="username"
            aria-required="true"
            aria-disabled={isDisabled}
            aria-invalid={errors.nameDotNumber ? 'true' : 'false'}
            aria-labelledby={nameDotNumberInputLabelId}
          />
          <div className="join-item btn btn-sm no-animation cursor-default p-2">
            <span className="font-normal">@osu.edu</span>
          </div>
        </div>
      </label>
      <div className="form-control w-full">
        <button
          type="submit"
          className="btn btn-primary btn-sm"
          disabled={isDisabled}
          aria-disabled={isDisabled}
        >
          {isDisabled ? (
            <span className="loading loading-dots loading-md" />
          ) : (
            <span>Next</span>
          )}
          <ArrowRightIcon className="size-4 -ms-1" />
        </button>
      </div>
      <LegalNotice />
    </form>
  );
}
