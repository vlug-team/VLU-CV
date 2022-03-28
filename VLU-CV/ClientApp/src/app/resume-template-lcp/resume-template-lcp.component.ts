import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
@Component({
  selector: 'app-resume-template-lcp',
  templateUrl: './resume-template-lcp.component.html',
  styleUrls: ['./resume-template-lcp.component.css']
})
export class ResumeTemplateLCPComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  name() {
    
    htmlToImage.toPng(document.getElementById('cv_lcp'))
      .then(function (dataUrl) {

        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(dataUrl,'PNG',0,0,446,653);
        pdf.save('LuuChinhPhuong.pdf'); 
        
      });
    
  }

}
