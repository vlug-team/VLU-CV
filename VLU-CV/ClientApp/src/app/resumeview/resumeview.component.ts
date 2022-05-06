import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

	constructor(public service: CreateCvService, public router: ActivatedRoute, public routers: Router) { }
	cvdata: CreateCv;
	birthDate: string;
	ngOnInit(): void {
		this.router.params.subscribe(params => {
			this.service.getCVById(params.id).subscribe(data => {
				this.cvdata = data;
				this.birthDate = new Date(data.birthDay).toLocaleDateString();
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
	deletecv() {
		this.service.deleteCV(this.cvdata.id).subscribe(res => {
			alert('CV deleted successfully.');
			this.routers.navigate(['/profile']);
		});

	}
	edit() {
		this.routers.navigate(['profile/edit/' + this.cvdata.id]);
	}
}
