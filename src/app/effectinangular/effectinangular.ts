import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effectinangular',
  imports: [],
  templateUrl: './effectinangular.html',
  styleUrl: './effectinangular.css'
})
export class Effectinangular {
userName = signal('chanadan')
count= signal(0)

displaydiv = false

constructor(){
  effect(() => {
    console.log(this.userName());
    
    if(this.count() > 2 && this.count()  < 5){
      this.displaydiv = true;
    } else{
      this.displaydiv = false;
    }

    setTimeout(() => {
      this.count.set(50)
    }, 5000)
    
  })
}
}
