import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppComponent } from '../app.component';

export const protheusGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const app = inject(AppComponent);

  if (app.protheus) {
    router.navigate(['/home']);
    return true;
  }

  return false;  
};