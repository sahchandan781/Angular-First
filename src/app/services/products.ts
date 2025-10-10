import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products  {
  // constructor(){
  //   console.log("service is called");
    
  // }

  // getProductData(){
  //   return [
  //     {name:"I Phone", category:"mobile", price:120000 },
  //     {name:"samsung Galaxy", category:"mobile", price:120001 },
  //     {name:"Study table", category:"furniture", price:4000 },
  //     {name:"Charger", category:"electronics", price:300 },
  //     {name:"mouse", category:"electronics", price:1200 },
  //   ]
  // }

  // fetching data trought api call
  constructor(private http:HttpClient){}

  fetchData():any{
     return  this.http.get("https://dummyjson.com/products")
  }
    
  
}
