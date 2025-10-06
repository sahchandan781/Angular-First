import { Component } from '@angular/core';

@Component({
  selector: 'app-getinputvalue',
  imports: [],
  templateUrl: './getinputvalue.html',
  styleUrl: './getinputvalue.css'
})
export class Getinputvalue {
username = ""

handleChange(event:Event){
  this.username = (event.target as HTMLInputElement).value

}
name = ""

setUsername(){
  this.name = this.username
}

getUsernameWithTemplate(val:string){
this.username = val
console.log(val);

}


}
