import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlAddress = environment.SERVER_URL;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.urlAddress + 'product')
      .pipe(map((product) => product || []));
  }

  createProduct(product: Product) {
    return this.http.post(
      this.createCompleteRoute('product', this.urlAddress),
      product
    );
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}${route}`;
  }
}
