import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  username: string | null = ""
constructor(private route:ActivatedRoute){

}
ngOnInit(){
// this.username = this.route.snapshot.paramMap.get('name') // pass data with router link
// this.route.queryParams.subscribe(params =>{ //pass data with button click
//   console.log(params);
  
// } )





}
}
