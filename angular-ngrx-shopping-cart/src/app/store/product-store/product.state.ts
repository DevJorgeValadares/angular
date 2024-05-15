
// export interface IProductListItem {
//   id?:number;
//   name: string;
//   price:number;
// }

import { Product } from "../../core/models/product";

export interface IProductListState {
  products: Product[];
  isLoanding: boolean;
}
