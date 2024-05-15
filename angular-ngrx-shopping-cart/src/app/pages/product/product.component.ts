import { Component } from '@angular/core';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { selectorProductListState } from '../../store/product-store/product.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CreateProductComponent, ProductListComponent],

  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // constructor(private store: Store) {}

  // products$ = this.store.select(selectorProductListState).pipe(
  //   map(state => state.products)
  // );
}
