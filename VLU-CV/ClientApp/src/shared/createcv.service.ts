
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateCv } from './createcv.model';
import { NgForm } from '@angular/forms';

@Injectable()

export class CreateCvService {
	constructor(private http: HttpClient) {
	}

	readonly _baseUrl = 'http://localhost:5000/api/createcv';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];

	postCV(form: NgForm) {
		return this.http.post(this._baseUrl, form);
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