import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalsinangular',
  imports: [],
  templateUrl: './signalsinangular.html',
  styleUrl: './signalsinangular.css'
})
export class Signalsinangular {
  data = 200
  // data: datatypeForsignal<datatype for signal value> = signal(value)
  count = signal(10);

  firstName = signal('chandan')
setCounter(){
  this.count.set(100)
}

// signals that produces their value based on other signal is called computed signal
count2 = computed(()=> (this.count()+1))
firstNameCapital = computed(() => this.firstName().toUpperCase())
updateSignal(){
  this.count
}

constructor(){
  effect(() => {
    console.log(this.data);
    console.log(this.count());
    
    
  })
}




}
