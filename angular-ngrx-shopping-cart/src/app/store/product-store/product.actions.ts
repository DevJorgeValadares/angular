import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../core/models/product';
import { IProductListState } from './product.state';

// export const createProduct = createAction(
//   '[Product] Create Product',
//   props<{ item: Product }>(),
//   );

export const ProductActions = createActionGroup({
  source: 'Products',
  events: {
    'Create Product': props<{ product: Product }>(),
    'Product List': emptyProps(),
    'Product List Success': props<{ products: Product[] }>(),
    'Product List Error': emptyProps(),
  },
});
