import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
@Component({
  selector: 'app-resume-template-hlh',
  templateUrl: './resume-template-hlh.component.html',
  styleUrls: ['./resume-template-hlh.component.css']
})
export class ResumeTemplateHLHComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  name() {
    
    htmlToImage.toPng(document.getElementById('cv_hlc'))
      .then(function (dataUrl) {

        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(dataUrl,'PNG',0,0,350,623);
        pdf.save('HoangLinhChau.pdf'); 
        
      });
    
  }

}
