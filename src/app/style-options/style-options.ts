import { Component } from '@angular/core';

@Component({
  selector: 'app-style-options',
  imports: [],
  templateUrl: './style-options.html',
  styleUrl: './style-options.css'
})
export class StyleOptions {
color ="green"
zoom = true;
fontNormal = '40px';
fontSizeBig = "100px"


zoomToggle() {
this.zoom = !this.zoom
}
}
