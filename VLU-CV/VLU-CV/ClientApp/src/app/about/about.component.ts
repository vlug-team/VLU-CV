import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  onClick(event: Event) { 
    window.scroll({ top: 0, behavior: 'smooth' });
  } ;
}
