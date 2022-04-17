import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateCv } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
	selector: 'app-resumeview',
	templateUrl: './resumeview.component.html',
	styleUrls: ['./resumeview.component.css']
})
export class ResumeviewComponent implements OnInit {

	constructor(public service: CreateCvService, public router: ActivatedRoute) { }
	cvdata: CreateCv;
	ngOnInit(): void {
		this.router.params.subscribe(params => {
			this.service.getCVById(params.id).subscribe(data => {
				this.cvdata = data;
				console.log(this.cvdata);
			});
		}
		);
	}

	download() {
		var data = document.getElementById('cv');
		html2canvas(data).then(canvas => {
			let imgWidth = 208;
			let pageHeight = 295;
			let imgHeight = canvas.height * imgWidth / canvas.width;
			let heightLeft = imgHeight;

			const contentDataURL = canvas.toDataURL('image/png')
			let pdf = new jspdf.jsPDF('p', 'mm', 'a4');
			let position = 0;
			pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
			pdf.save(this.cvdata.fullName + '.pdf');
		});
	}

}
