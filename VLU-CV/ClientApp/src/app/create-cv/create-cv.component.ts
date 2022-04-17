import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, Subscriber } from 'rxjs';
import { CreateCvService } from 'src/shared/createcv.service';
@Component({
	selector: 'app-create-cv',
	templateUrl: './create-cv.component.html',
	styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
	[x: string]: any;
	user: SocialUser | null;
	constructor(public service: CreateCvService, private authService: SocialAuthService) {
		this.user = null;
		this.authService.authState.subscribe((user: SocialUser) => {
			this.user = user;
		});
	}
	ngOnInit(): void {

	}
	imgSrc: string;
	isImg = false;


	onSubmit(form: NgForm): void {
		this.service.formData.userId = this.user.id;
		this.service.postCV().subscribe(res => {
			alert('CV created successfully.');
			form.reset();
		}
			,
			err => {
				alert('Error creating CV.');
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
			this.service.formData.imageSrc = d;
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
