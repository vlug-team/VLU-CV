
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCv } from './createcv.model';

@Injectable({
	providedIn: 'root'
})
export class CreateCvService {
	constructor(private http: HttpClient) { }
	readonly baseURL = 'http://localhost:5001/api/createcv';
	formData: CreateCv = new CreateCv();
	postCreateCV() {
		return this.http.post(this.baseURL, this.formData);
	}
}