import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
// @Input() user:string =""
@Input() gender:string =""
@Input() city:string =""
@Input() user: string = ""


}
