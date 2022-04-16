import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaiService } from 'src/shared/mai.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(public model: MaiService) { }

	ngOnInit(): void {
	}
	onSubmit(form: NgForm) {
		this.model.sendMail().subscribe(res => {
			alert('We will contact soon.');
			form.reset();
		}
			,
			err => {
				alert('Error sending mail.');
				console.log(err);
			}
		);
	}

}
