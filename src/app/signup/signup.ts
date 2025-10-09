import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
// name = new FormControl();
// email = new FormControl();
// password = new FormControl();

signupInfo = new FormGroup({
  name: new FormControl("",[Validators.required]),
  email: new FormControl("", [Validators.required, Validators.minLength(5)]),
  password: new FormControl("", [Validators.required, Validators.email]),
})

getInfo(){
  console.log(this.signupInfo.value.name);
  
}

handleSubmit(){

}

get name(){
  return this.signupInfo.get('name')
}

get email(){
  return this.signupInfo.get('email')
}

get password(){
  return this.signupInfo.get('password')
}

userData: NgForm |null = null
addUser(val:NgForm){
  console.log(val.value);
  this.userData = val
}
}
