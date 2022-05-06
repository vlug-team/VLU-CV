import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, Subscriber } from 'rxjs';
import { CreateCv, ErrorList } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';
@Component({
	selector: 'app-create-cv',
	templateUrl: './create-cv.component.html',
	styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
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
	errorList: ErrorList;

	onSubmit(form: NgForm): void {
		this.service.formData.userId = this.user.id;
		this.service.postCV(this.service.formData).subscribe(res => {
			alert('CV created successfully.');
			form.reset();
			this.isImg = false;
			this.imgSrc = null;
			this.service.formData = new CreateCv();
			this.service.refreshCVList();
		},
			err => {
				this.errorList = err.error.errors;
				console.log(err);
				if (err.status == 422) {
					alert('Please fill all the required fields.\n' + this.errorList.map(x => x.message).join('\n'));
				}
				else if (err.error.statusCode === 423) {
					alert('You can create just 6 cv in day');
				}
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
