// biome-ignore format: added alignment for clarity.
export interface FirebaseAdminConfigInterface {
  projectId  : string;
  privateKey : string;
  clientEmail: string;
}

export const firebaseAdminConfig: FirebaseAdminConfigInterface =
  // biome-ignore format: added alignment for clarity.
  {
  projectId  : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID  as string,
  privateKey : process.env.FIREBASE_ADMIN_PRIVATE_KEY       as string,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL      as string
};
