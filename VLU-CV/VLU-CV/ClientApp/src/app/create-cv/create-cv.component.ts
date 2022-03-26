import { Component, OnInit } from '@angular/core';
import { CreateCvService } from 'src/shared/createcv.service';

@Component({
	selector: 'app-create-cv',
	templateUrl: './create-cv.component.html',
	styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

	constructor(public service: CreateCvService) { }

	ngOnInit(): void {
	}
	onsubmit() {
		this.service.postCreateCV().subscribe(res => {
			console.log('Create CV successfully');
		});
	}
}
