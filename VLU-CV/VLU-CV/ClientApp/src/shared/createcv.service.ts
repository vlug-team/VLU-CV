
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateCv } from './createcv.model';

@Injectable()
export class CreateCvService {
	constructor(private http: HttpClient) {
	}
	readonly _baseUrl = 'http://localhost:5001/api/createcv';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];
	public add(formData: CreateCv) {
		return this.http.post(this._baseUrl, this.formData);
	}
}