import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateCv } from 'src/shared/createcv.model';
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
		this.service.add(form.value).subscribe(
		);
	}
}
