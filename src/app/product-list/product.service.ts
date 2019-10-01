import { Injectable } from '@angular/core';
import { Product } from './product-list.component';
import { Observable, of } from 'rxjs';


@Injectable()
export class ProductService {
    public products: Product[] = [
        {name: 'LG', price: 500},
        {name: 'Samsung', price: 500},
        {name: 'Apple', price: 500},
        {name: 'Sony', price: 500},
        {name: 'HTC', price: 500},
        {name: 'Moto', price: 500},
      ];
      
      constructor() {

      }
      
      public getProducts(): Observable<Product[]> {
        return of(this.products);
      }

};

