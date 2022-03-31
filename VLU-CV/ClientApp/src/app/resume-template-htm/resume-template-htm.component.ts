import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
@Component({
  selector: 'app-resume-template-htm',
  templateUrl: './resume-template-htm.component.html',
  styleUrls: ['./resume-template-htm.component.css']
})
export class ResumeTemplateHTMComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  name() {
    
    htmlToImage.toPng(document.getElementById('cv_htm'))
      .then(function (dataUrl) {

        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(dataUrl,'PNG',0,0,446,653);
        pdf.save('HongTuMy.pdf'); 
        
      });
    
  }

}
