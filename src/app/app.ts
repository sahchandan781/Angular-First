import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Getinputvalue } from './getinputvalue/getinputvalue';
import { StyleOptions } from "./style-options/style-options";
import { Ifelsecondition } from './ifelsecondition/ifelsecondition';
import { Switchcase } from "./switchcase/switchcase";
import { Forloop } from "./forloop/forloop";
import { Signalsinangular } from "./signalsinangular/signalsinangular";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Getinputvalue, StyleOptions, Ifelsecondition, Switchcase, Forloop, Signalsinangular],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'chandan';
  count: number = 0

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
}
