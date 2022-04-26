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

	constructor(public service: CreateCvService, public router: ActivatedRoute) {

	}

	user: SocialUser | null;
	formData: CreateCv;
	imgSrc: string;
	isImg = false;

	ngOnInit(): void {
		this.router.params.subscribe(params => {
			this.service.getCVById(params.id).subscribe(data => {
				this.formData = data;
			});
		}
		);
	}

	onSubmit(): void {
		this.formData.userId = this.user.id;
		this.service.editCV(this.formData).subscribe(res => {
			alert('CV edit successfully.');
		},
			err => {
				alert('CV edit failed.');
				console.log(err);
			}

		);
	}
	uploadImage(event: Event) {
		const file = (event.target as HTMLInputElement).files[0];
		this.isImg = true;
		this.convertImageToBase64(file);
	}
	convertImageToBase64(file: File) {
		const obervable = new Observable((sub: Subscriber<any>) => {
			this.readFile(file, sub);
		});
		obervable.subscribe((d) => {
			this.imgSrc = d;
			this.formData.imageSrc = d;
		})
	}
	readFile(file: File, sub: Subscriber<any>) {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			sub.next(fileReader.result);
			sub.complete();
		}
		fileReader.onerror = (error) => {
			sub.error(error);
			sub.complete();
		}
	}
}
