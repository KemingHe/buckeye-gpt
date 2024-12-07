import { z } from "zod";

import { DocumentReference } from "firebase/firestore";

export const DocumentReferenceSchema = z.custom<DocumentReference>(
  (value) => {
    return value instanceof DocumentReference;
  },
  {
    message: "Invalide Firebase Firestore DocumentReference object."
  }
);

export const UserOrgRefsSchema = z.object({
  memberOrgRefs: z
    .array(DocumentReferenceSchema)
    .describe(
      "Refs to student org docs in Firestore where the user is a member."
    ),
  adminOrgRefs: z
    .array(DocumentReferenceSchema)
    .describe(
      "Refs to student org docs in Firestore where the user is an admin."
    )
});

export type UserOrgRefsType = z.infer<typeof UserOrgRefsSchema>;
