
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateCv } from './createcv.model';
import { NgForm } from '@angular/forms';

@Injectable()

export class CreateCvService {
	constructor(private http: HttpClient) {
	}

	readonly _baseUrl = 'http://localhost:5001/api/createcv';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];

	postCV(form: any) {
		const headers = new HttpHeaders()
			.append('Content-Type', 'application/json')
			.append('Access-Control-Allow-Headers', 'Content-Type')
			.append('Access-Control-Allow-Methods', 'POST')
			.append('Access-Control-Allow-Origin', '*');
		return this.http.post(this._baseUrl, form, { headers: headers });
	}
	refreshCVList() {
		this.http.get(this._baseUrl)
			.toPromise()
			.then(res => this.list = res as CreateCv[]);
	}
}