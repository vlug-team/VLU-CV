
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCv, Dashboard } from './createcv.model';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

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


	postCV(data: CreateCv) {
		return this.http.post(this._baseUrl + "/createcv", data);
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
	editCV(data: CreateCv) {
		console.log(data);
		return this.http.put(this._baseUrl + '/editcv' + data.id, data);
	}
	deleteCV(id: number) {
		return this.http.delete(this._baseUrl + '/deletecv' + id);
	}
	getdashboard(): Observable<Dashboard> {
		return this.http.get<Dashboard>(this._baseUrl + '/getcount');
	}
	getalldashboard(): Observable<Dashboard[]> {
		return this.http.get<Dashboard[]>(this._baseUrl + '/getcount');
	}
	getcount(): Observable<number> {
		return this.http.get<number>(this._baseUrl + '/getcountcv');
	}
	getcountofmonth(): Observable<number> {
		return this.http.get<number>(this._baseUrl + '/getcountofmonth');
	}
}
