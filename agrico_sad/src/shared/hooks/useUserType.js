import { useSyncExternalStore } from 'react';
import { getUserType, subscribeToUserType } from '@/shared/lib/auth';

export function useUserType() {
  return useSyncExternalStore(subscribeToUserType, getUserType, () => null);
}
