import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mail } from "./mail.model";

@Injectable({
	providedIn: "root"
})

export class MaiService {
	constructor(private http: HttpClient) { }
	contact: Mail = new Mail();
	sendMail() {
		return this.http.post("http://localhost:5001/api/mail/sendmail", this.contact);
	}
}


