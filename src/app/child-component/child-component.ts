import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
// @Input() user:string =""
// @Input() gender:string =""
// @Input() city:string =""
// @Input() user: string = ""

// Passing data from child component to parent component

@Output() getUsers = new EventEmitter()
 users = ['chandan', 'anil', 'rohan','ravi']

//  ngOnInit(){
//   this.getUsers.emit(this.users)
//  }

}
