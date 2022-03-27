import { Component, OnInit } from '@angular/core';
import { CreateCvService } from 'src/shared/createcv.service';
import { NgForm } from '@angular/forms';
import { CreateCv } from 'src/shared/createcv.model';
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
		if (this.service.formData.id == 0) //we will use the id as identifier for updating or insertion
			this.insertRecord(form);
		else
			this.updateRecord(form);
	}
	insertRecord(form: NgForm) {
		this.service.postCreateCV().subscribe(
			res => {
				this.resetForm(form);
				this.service.refreshList();
			},
			err => {
				console.log(err);
			}
		);
	}
	updateRecord(form: NgForm) {
		this.service.putCV().subscribe(
			res => {
				this.resetForm(form);
				this.service.refreshList();
			},
			err => {
				console.log(err);
			}
		);
	}
	resetForm(form: NgForm) {
		form.form.reset();
		this.service.formData = new CreateCv();
	}
}
