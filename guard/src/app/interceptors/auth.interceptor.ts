import type { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

let auth: string;
let authReq: HttpRequest<any>;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  authReq = req;
  const token = localStorage.getItem('token');

  authReq = req.clone({ setHeaders: {Authorization: 'Bearer ' + token} });

  return next(authReq);
}