import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  imports: [],
  templateUrl: './switchcase.html',
  styleUrl: './switchcase.css'
})
export class Switchcase {
color1= "gold"

handleColorSwitch(val:string){
  this.color1 = val;
}


handleColor(event:Event){
  this.color1  = (event.target as HTMLInputElement).value
}

}
