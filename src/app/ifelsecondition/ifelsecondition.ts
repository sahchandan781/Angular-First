import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelsecondition',
  imports: [],
  templateUrl: './ifelsecondition.html',
  styleUrl: './ifelsecondition.css'
})
export class Ifelsecondition {
  display = false
  val = 10

  hide(){
    this.val = 0
  }

  toggle(){
    this.display = !this.display;
  }
}
