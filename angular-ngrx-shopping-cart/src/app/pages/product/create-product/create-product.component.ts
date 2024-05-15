import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { Store } from '@ngrx/store';
import { ProductActions } from '../../../store/product-store/product.actions';

import { Product } from '../../../core/models/product';



@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  });

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onCreateProduct() {
    this.submitted = true;
    // let product = new Product();
    // product = this.form.value;
    // console.log(product);
    if (this.form.valid) {
      this.productService
        .createProduct(this.form.value)
        .subscribe(  {
          next: (product) =>{
            this.store.dispatch(
              ProductActions.createProduct({ product: product as Product})
            )
          }
        }

        );

      this.onReset();
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
