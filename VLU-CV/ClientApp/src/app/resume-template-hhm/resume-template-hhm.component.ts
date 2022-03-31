import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
@Component({
  selector: 'app-resume-template-hhm',
  templateUrl: './resume-template-hhm.component.html',
  styleUrls: ['./resume-template-hhm.component.css']
})
export class ResumeTemplateHHMComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  name() {
    
    htmlToImage.toPng(document.getElementById('cv_hhm'))
      .then(function (dataUrl) {

        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(dataUrl,'PNG',0,0,390,653);
        pdf.save('HaHoangMinh.pdf'); 
        
      });
    
  }
}
