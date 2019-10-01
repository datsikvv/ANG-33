import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product-list.component'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public newProduct:  Product = {
    name: '',
    price: 0
  };


  constructor() { }

  ngOnInit() {
  }
  public addProduct(): void {
    console.log(this.newProduct);
  }


}
