import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { CreateCv } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';

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
}
