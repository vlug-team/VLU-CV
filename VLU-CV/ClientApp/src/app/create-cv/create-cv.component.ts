import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
	onSubmit(form: NgForm) {
		this.service.postCV().subscribe(res => {
			alert('CV created successfully.');
		}
			,
			err => {
				alert('Error creating CV.');
				console.log(err);
			}
		);
	}
}
