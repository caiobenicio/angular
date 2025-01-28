import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export namespace AuthGuard {
  export const canActivate = (
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
  ) => {
      const authService = inject(AuthService);
      const router = inject(Router);

      return authService.isLoggedIn().pipe(
              map(() => true),
              catchError(() => {
                  return of(router.createUrlTree(['/login']));
              }
          )
      );
  }

  export const canActivateChild = (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ) => canActivate(route, state);

}
