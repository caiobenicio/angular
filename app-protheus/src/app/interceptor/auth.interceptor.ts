import type { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

let auth: string;
let authReq: HttpRequest<any>;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  authReq = req;
  auth = JSON.parse(sessionStorage['access_token']).access_token;    

  authReq = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${auth}`,
    },
  });  

  return next(authReq);
}