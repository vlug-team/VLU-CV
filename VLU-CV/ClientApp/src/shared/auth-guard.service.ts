import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(
		private socialAuthService: SocialAuthService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.socialAuthService.authState.pipe(
			map((socialUser: SocialUser) => !!socialUser),
			tap((isLoggedIn: boolean) => {
				if (!isLoggedIn) {
					alert("You must be logged in to view this page.");
				}
			})
		);
	}
}