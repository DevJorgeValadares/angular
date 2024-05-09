import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product';

export const createProduct = createAction(
  '[Product] Create Product',
  props<{ item: Product }>()
);
