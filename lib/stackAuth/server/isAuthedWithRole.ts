import 'server-only';
import type { CurrentServerUser } from '@stackframe/stack';

import stackServerApp from '@/lib/stackAuth/server/stackServerApp';

export default async function isAuthedWithRole(
  role: string | null,
): Promise<boolean> {
  const currentUser: CurrentServerUser | null = await stackServerApp.getUser();

  // Short-circuit and return false if the user is not authenticated.
  if (!currentUser) return false;

  // If no role is provided, return true if the user is authenticated.
  if (!role) return true;

  // Check if the user has the specified role.
  const currentUserRole: string | null = currentUser.serverMetadata?.role;
  return currentUserRole === role;
}

// TODO: Properly type serverMetadata using a zod schema.
