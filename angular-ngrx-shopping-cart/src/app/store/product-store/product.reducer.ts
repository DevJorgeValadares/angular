import { createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';

import { IProductListState } from './product.state';

export const initialState: IProductListState = {
  products: [
    {
      id: 1,
      name: 'teste1',
      price: 1,
    },
    {
      id: 12,
      name: 'teste2',
      price: 12,
    },
    {
      id: 10,
      name: 'teste3',
      price: 156,
    },
    {
      id: 5,
      name: 'teste4',
      price: 6,
    },
  ],
  isLoanding: false,
};

export const productListReducer = createReducer(
  initialState,
  on(ProductActions.productList, (state) => {
    return {
      ...state,
      isLoanding: true,
    };
  }),

  on(ProductActions.productListSuccess, (state, { products }) => ({
    ...state,
    products,
    isLoanding: false,
  })),

  on(ProductActions.productListError, (state) => {
    return {
      ...state,
      isLoanding: false,
    };
  }),

  on(ProductActions.createProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    isLoanding: false,
  }))
);
