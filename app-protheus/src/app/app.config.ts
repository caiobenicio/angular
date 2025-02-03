import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { authInterceptor } from './interceptor/auth.interceptor';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom([ProtheusLibCoreModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
  ]
};