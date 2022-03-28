import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  onClick(event: Event) { 
    window.scroll({ top: 0, behavior: 'smooth' });
  } ;
}
