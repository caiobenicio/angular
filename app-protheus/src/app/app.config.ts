import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {   
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([ProtheusLibCoreModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    //provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
  ],

};