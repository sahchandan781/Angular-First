import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css'
})
export class Forloop {
users=['chandan', 'abhishek', 'shivani', 'sonali', 'chirag','sumit'];

employees = [
  {name:'chandan',age:20, email:'chandan@test.com'},
  {name:'anil',age:21, email:'anil@test.com'},
  {name:'subham',age:23, email:'subham@test.com'},
  {name:'sahil',age:25, email:'sahil@test.com'}
]

getName(name:string){
  console.log(name);
  
}
}
