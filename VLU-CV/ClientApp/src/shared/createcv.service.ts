
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCv } from './createcv.model';

@Injectable()

export class CreateCvService {
	constructor(private http: HttpClient) {
	}

	readonly _baseUrl = 'http://localhost:5000/api';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];

	postCV() {
		return this.http.post(this._baseUrl + "/createcv", this.formData);
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