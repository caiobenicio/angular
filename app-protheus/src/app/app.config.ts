import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { authInterceptor } from './interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {   
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom([ProtheusLibCoreModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
  ],

};