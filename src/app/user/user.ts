import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  name: string | null = "";
  id: string | null = "";

  employee: any = null;

  employees = [
  {id:1, name:'chandan',age:20, email:'chandan@test.com'},
  {id:2, name:'anil',age:21, email:'anil@test.com'},
  {id:3, name:'subham',age:23, email:'subham@test.com'},
  {id:4, name:'sahil',age:25, email:'sahil@test.com'}
]

constructor(private route: ActivatedRoute){

}



ngOnInit(): void{
  this.route.params.subscribe((param) => {
    console.log(param);
    this.id = param['id']
    
  })

  // convert id to number for comparison
  const empId = Number(this.id)

  //find matching employee
  this.employee = this.employees.find((emp) => emp.id=== empId)


}

}
