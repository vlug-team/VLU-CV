import { Component, Inject, Injectable, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { CreateCv } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';
import * as htmlToImage from 'html-to-image';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	constructor(public service: CreateCvService) { };
	data: CreateCv[];
	ngOnInit(): void {
		this.service.getCV().subscribe(data => {
			this.data = data;
			console.log(this.data);
		})
	}
	download() {
		htmlToImage.toPng(document.getElementById('cv'))
			.then(function (dataUrl) {

				let pdf = new jsPDF('p', 'px', 'a4');
				pdf.addImage(dataUrl, 'PNG', 0, 0, 446, 653);
				pdf.save('mycv.pdf');

			});
		console.log(this.data);
	}


}
