'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export default function SignInPage() {
  const [emailSubstring, setEmailSubstring] = useState<string>('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const response = await fetch('/api/stack/auth/send-magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailSubstring }),
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>Input value: {emailSubstring}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="keminghe.career"
          id="email-substring"
          name="email-substring"
          value={emailSubstring}
          required
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmailSubstring(event.target.value)
          }
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
