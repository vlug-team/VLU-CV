import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  onClick(event: Event) { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
  } ;
}
