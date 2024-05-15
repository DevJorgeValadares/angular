import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environments';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideHttpClient(withFetch()),
    //provideStore({ products: productsReducer }),
    importProvidersFrom(StoreDevtoolsModule.instrument({ maxAge: 25 })),

    //importProvidersFrom(StoreModule.forFeature('products', productsReducer))
  ],
};
