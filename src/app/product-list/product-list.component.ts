import { Component, OnInit } from '@angular/core';
import { ProductService }  from './product.service';

export interface Product {
  name: string;
  price: number;
}





// const PRODUCTS: any[] = [
//   {name: 'LG', price: 500},
//   {name: 'Samsung', price: 500},
//   {name: 'Apple', price: 500},
//   {name: 'Sony', price: 500},
//   {name: 'HTC', price: 500},
//   {name: 'Moto', price: 500},
// ]

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList: Array<Product> = [];
  public selectedProduct: Product = null;




  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.productList = data;
      }
    );
  }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
  }




}
