"use server";

export default async function signUpAction(formData: FormData): Promise<void> {
  console.log(`"signUpAction" invoked with ${JSON.stringify(formData)}`);
}
