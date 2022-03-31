import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
@Component({
  selector: 'app-resume-template-tnn',
  templateUrl: './resume-template-tnn.component.html',
  styleUrls: ['./resume-template-tnn.component.css']
})
export class ResumeTemplateTNNComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  name() {
    
    htmlToImage.toPng(document.getElementById('cv_tnn'))
      .then(function (dataUrl) {

        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(dataUrl,'PNG',0,0,446,653);
        pdf.save('TongNhatNgao.pdf'); 
        
      });
    
  }

}
