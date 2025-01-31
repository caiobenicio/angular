import type { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

let authReq: HttpRequest<any>;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  authReq = req;
  const token = localStorage.getItem('access_token');

  authReq = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`,
    },
  });  

  return next(authReq);
}