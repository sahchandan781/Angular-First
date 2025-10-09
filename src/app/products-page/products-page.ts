import { Component, OnInit } from '@angular/core';
import { Products } from '../services/products';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-products-page',
  imports: [],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage implements OnInit {

  productData : {
      name:String;
      category:string;
      price:number;

    }[] | undefined 
  constructor(private productServices: Products){ 
  }

  ngOnInit(){
      this.productData = this.productServices.getProductData();
    }
}
