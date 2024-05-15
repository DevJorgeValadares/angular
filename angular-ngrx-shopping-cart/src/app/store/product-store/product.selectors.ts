import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductListState } from './product.state';

export const selectorProductListState =
  createFeatureSelector<IProductListState>('products');

export const selectProductList = createSelector(
  selectorProductListState,
  (state) => state.products
);

export const selectProductListIsLoading = createSelector(
  selectorProductListState,
  (state) => state.isLoanding
);
