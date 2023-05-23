import { NotFoundException } from '@nestjs/common';
import { UserTokenObject } from './types/types';

export function validateStoreId(
  storeId: string,
  creatorObject: any,
  message = '',
): void {
  if (storeId !== creatorObject?.storeId) {
    throw new NotFoundException(message);
  }
}

export function isTokenExists(requester: UserTokenObject): boolean {
  return !!(requester && requester.id);
}
