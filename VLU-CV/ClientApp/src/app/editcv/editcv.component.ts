import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, Subscriber } from 'rxjs';
import { CreateCv } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';

@Component({
	selector: 'app-editcv',
	templateUrl: './editcv.component.html',
	styleUrls: ['./editcv.component.css']
})
export class EditcvComponent implements OnInit {

	constructor(public service: CreateCvService, public router: ActivatedRoute, public route: Router) {

	}

	user: SocialUser | null;
	formData: CreateCv;
	ngOnInit(): void {
		this.router.params.subscribe(params => {
			this.service.getCVById(params.id).subscribe(data => {
				this.formData = data;
			});

		}
		);
	}

	onSubmit(): void {
		this.service.editCV(this.formData).subscribe(res => {
			alert('CV edit successfully.');
			this.route.navigate(['/profile']);
		},
			err => {
				alert('CV edit failed.');
				console.log(err);
			}

		);
	}
}
