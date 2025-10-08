import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forloop',
  imports: [RouterLink],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css'
})
export class Forloop {
users=['chandan', 'abhishek', 'shivani', 'sonali', 'chirag','sumit'];

employees = [
  {id:1, name:'chandan',age:20, email:'chandan@test.com'},
  {id:2, name:'anil',age:21, email:'anil@test.com'},
  {id:3, name:'subham',age:23, email:'subham@test.com'},
  {id:4, name:'sahil',age:25, email:'sahil@test.com'}
]

getName(name:string){
  console.log(name);
  
}
}
