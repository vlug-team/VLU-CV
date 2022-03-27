
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCv } from './createcv.model';

@Injectable({
	providedIn: 'root'
})
export class CreateCvService {
	constructor(private http: HttpClient) { }
	readonly baseURL = 'http://localhost:5001/api/CreateCV';
	formData: CreateCv = new CreateCv();
	list: CreateCv[];
	postCreateCV() {
		return this.http.post(this.baseURL, this.formData);
	}
	putCV() {
		return this.http.put(this.baseURL, this.formData);
	}
	refreshList() {
		this.http.get(this.baseURL)
			.toPromise()
			.then(res => this.list = res as CreateCv[]);
	}
}