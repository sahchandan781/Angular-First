import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Getinputvalue } from '../getinputvalue/getinputvalue';
import { StyleOptions } from '../style-options/style-options';
import { Ifelsecondition } from '../ifelsecondition/ifelsecondition';
import { Switchcase } from '../switchcase/switchcase';
import { Forloop } from '../forloop/forloop';
import { Signalsinangular } from '../signalsinangular/signalsinangular';
import { Effectinangular } from '../effectinangular/effectinangular';
import { LoopContextual } from '../loop-contextual/loop-contextual';
import { TwoWayBinding } from '../two-way-binding/two-way-binding';
import { Todolist } from '../todolist/todolist';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from '../pipe/currency-converter-pipe';
import { Products } from '../services/products';


@Component({
  selector: 'app-home',
    imports: [CurrencyConverterPipe, CommonModule,Getinputvalue, StyleOptions, Ifelsecondition, Switchcase, Forloop, Signalsinangular, Effectinangular, LoopContextual, TwoWayBinding, Todolist, ],


  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
title = 'chandan';
  count: number = 0

  date = new Date();
  amount= 200;

  handleCounter (val:string){
    if(val=='plus'){
    this.count = this.count + 1;
    }
    else if(val == 'minus' ){
    if(this.count > 0) {
      this.count = this.count - 1;
    } else {
      this.count = 0
    }

    }
    else {
      this.count = 0
    }
  }
// pass data from one page to other

constructor(private router: Router, private productService:Products){

}
//   goToProfile(){
// this.router.navigate(['profile'],{queryParams:{name:"chandan"}})
//   } // pass data with button click
}
