import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
@Component({
	selector: "app-nav-menu",
	templateUrl: "./nav-menu.component.html",
	styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent {
	isExpanded = false;
	collapse() {
		this.isExpanded = false;
	}

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
	user: SocialUser | null;

	constructor(private authService: SocialAuthService) {
		this.user = null;
		this.authService.authState.subscribe((user: SocialUser) => {
			console.log(user);
			this.user = user;
		});
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
	}

	signOut(): void {
		this.authService.signOut();
	}
}
