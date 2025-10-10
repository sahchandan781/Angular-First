import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormsModule } from "@angular/forms";
import { UserInterface } from '../interfaces/UserInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
//   name: string | null = "";
//   id: string | null = "";

//   employee: any = null;

//   employees = [
//   {id:1, name:'chandan',age:20, email:'chandan@test.com'},
//   {id:2, name:'anil',age:21, email:'anil@test.com'},
//   {id:3, name:'subham',age:23, email:'subham@test.com'},
//   {id:4, name:'sahil',age:25, email:'sahil@test.com'}
// ]

// constructor(private route: ActivatedRoute){

// }



// ngOnInit(): void{
//   this.route.params.subscribe((param) => {
//     console.log(param);
//     this.id = param['id']
    
//   })

//   // convert id to number for comparison
//   const empId = Number(this.id)

//   //find matching employee
//   this.employee = this.employees.find((emp) => emp.id=== empId)


// }


// fetch through json service

constructor(private usersService:UserService){}

userData: UserInterface[] =[]
ngOnInit(){
  this.getUser()
}

getUser(){
  this.usersService.getData().subscribe((data:UserInterface[]) => {
    
    this.userData = data
    
    
  })
}

addUser(user:UserInterface){
    

    this.usersService.saveUser(user).subscribe((data) => {
      if(data){
        this.getUser()
      }
      
    })

    


    
  }

}
