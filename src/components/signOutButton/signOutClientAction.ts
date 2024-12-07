import { signOut } from "firebase/auth";

import { fbAuth } from "@lib/firebase/firebaseClientApp";

export default function signOutClientAction(): void {
  try {
    signOut(fbAuth);
  } catch (error) {
    console.error(
      `Error at "${signOutClientAction.name}" when invoked: "${error}".`
    );
  }
}
