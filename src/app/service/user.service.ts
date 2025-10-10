import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/UserInterface';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient){}

  getData():Observable<UserInterface[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<UserInterface[]>(url);
  }

  saveUser(user: UserInterface):Observable<UserInterface>{
    const url = "http://localhost:3000/users";
    return this.http.post<UserInterface>(url, user)
  }
  
}
