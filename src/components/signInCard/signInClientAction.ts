import { sendSignInLinkToEmail } from "firebase/auth";

import {
  FIREBASE_AUTH_LOCAL_STORAGE_KEY,
  actionCodeSettings
} from "@lib/firebase/actionCodeSettings";
import { fbAuth } from "@lib/firebase/firebaseClientApp";

export default async function signInClientAction(
  formData: Readonly<FormData>
): Promise<void> {
  console.log(
    `Invocation: "${signInClientAction.name}" with forData: "${JSON.stringify(formData)}".`
  );
  const email: string = formData.get("email") as string;
  try {
    await sendSignInLinkToEmail(fbAuth, email, actionCodeSettings);
    console.log(`Success: sign in link sent to "${email}".`);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(FIREBASE_AUTH_LOCAL_STORAGE_KEY, email);
      console.log(
        `Success: "${email}" saved to local storage for later verification.`
      );
    }
  } catch (error) {
    console.error(
      `Error at "${signInClientAction.name}" when sending sign in link to ${email}: ${error}`
    );
  }
}
