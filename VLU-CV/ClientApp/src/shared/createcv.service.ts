
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCv } from './createcv.model';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable()

export class CreateCvService {
	user: SocialUser;
	constructor(private http: HttpClient, private authService: SocialAuthService) {
		this.authService.authState.subscribe((user: SocialUser) => {
			this.user = user;
		});
	}

	readonly _baseUrl = 'http://localhost:5000/api';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];
	data: CreateCv;

	postCV() {
		return this.http.post(this._baseUrl + "/createcv", this.formData);
	}
	getCV(): Observable<CreateCv[]> {
		return this.http.get<CreateCv[]>(this._baseUrl + '/getcv?userId=' + this.user.id);
	}
	getCVById(id: number): Observable<CreateCv> {
		return this.http.get<CreateCv>(this._baseUrl + '/getcv' + id);
	}
	refreshCVList() {
		this.http.get(this._baseUrl)
			.toPromise()
			.then(res => this.list = res as CreateCv[]);
	}
	editCV(form: any) {
		return this.http.put(this._baseUrl + '/' + form.id, form);
	}

}
