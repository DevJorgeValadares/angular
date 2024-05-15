import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../../core/services/product.service';
import { Store, select } from '@ngrx/store';
import { ProductActions } from '../../../store/product-store/product.actions';
import { map } from 'rxjs';
import {

  IProductListState,
} from '../../../store/product-store/product.state';
import { selectorProductListState } from '../../../store/product-store/product.selectors';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {


  constructor(private store: Store) {}

  products$ = this.store.select(selectorProductListState).pipe(
    map(state => state.products)
  );

  ngOnInit(): void {
    this.store.dispatch(ProductActions.productList());
  }
}
