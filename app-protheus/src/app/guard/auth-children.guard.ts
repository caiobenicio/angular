import { CanActivateChildFn } from '@angular/router';

export const AuthChildrenGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
