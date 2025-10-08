import { Component } from '@angular/core';

import { Header } from "./header/header";




@Component({
  selector: 'app-root',
  imports: [Header, ],
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
