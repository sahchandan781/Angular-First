import { Component } from '@angular/core';
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {
// username = "sahchandan781"
// gender: string = ""

// users = ['chandan', 'anil', 'rohan','ravi']

// changeGender(val: string){
//   this.gender = val
// }

users:string[] |undefined ;
// Passing data from child component to parent component
handleUsers(users:string[]){
  console.log(users);
  this.users = users
}

}
