import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as download from 'downloadjs';

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
      download(dataUrl, 'LCP-Resume.png','');
    });
  };
  

}
