import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { provideState } from '@ngrx/store';
import { productListReducer } from './store/product-store/product.reducer';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    providers: [
      provideState({
        name: 'products',
        reducer: productListReducer,
      }),

    ],
  },
];
