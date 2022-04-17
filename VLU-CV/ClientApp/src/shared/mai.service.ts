import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Mail } from "./mail.model";

@Injectable({
	providedIn: "root"
})

export class MaiService {
	constructor(private http: HttpClient) { }
	contact: Mail = new Mail();
	readonly _baseUrl = "https://localhost:5001/api/mail/sendmail";
	sendMail() {
		return this.http.get(this._baseUrl + "?Name=" + this.contact.name + "&NumberPhone=" + this.contact.numberPhone + "&Mail=" + this.contact.mail + "&Text=" + this.contact.text);
	}
}


