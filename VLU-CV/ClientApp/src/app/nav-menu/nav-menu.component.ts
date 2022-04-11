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
	[x: string]: any;
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
			this.user = user;
		});
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions).then((data) => {
			console.log(data);
		}).catch(data => {
			this.authService.signOut();
			this.router.navigate(['/']);
		});
	}
	signOut(): void {
		this.authService.signOut();
		alert("You have been logged out");
	}
}
