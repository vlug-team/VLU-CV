import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AppFooterComponent } from "./about/app-footer/app-footer.component";
import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from "./resume/resume.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { ResumeTemplateLCPComponent } from './resume-template-lcp/resume-template-lcp.component';
import { ResumeTemplateHHMComponent } from './resume-template-hhm/resume-template-hhm.component';
import { ResumeTemplateHLHComponent } from "./resume-template-hlh/resume-template-hlh.component";
import { ResumeTemplateTNNComponent } from "./resume-template-tnn/resume-template-tnn.component";
import { ResumeTemplateHTMComponent } from "./resume-template-htm/resume-template-htm.component";
import { CreateCvComponent } from './create-cv/create-cv.component';
import { CreateCvService } from "src/shared/createcv.service";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { AuthGuardService } from "src/shared/auth-guard.service";
import { ProfileComponent } from './profile/profile.component';
import { EnventnewComponent } from './enventnew/enventnew.component';
import { InforeventComponent } from './inforevent/inforevent.component';
import { Inforevent2Component } from './inforevent2/inforevent2.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPaginationModule } from "ngx-pagination";
import { ResumeviewComponent } from './resumeview/resumeview.component';
import { EditcvComponent } from './editcv/editcv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		ResumeComponent,
		AboutComponent,
		AppFooterComponent,
		ResumeTemplateComponent,
		ResumeTemplateLCPComponent,
		ResumeTemplateHHMComponent,
		ResumeTemplateHLHComponent,
		ResumeTemplateTNNComponent,
		ResumeTemplateHTMComponent,
		CreateCvComponent,
		ProfileComponent,
		EnventnewComponent,
		InforeventComponent,
		Inforevent2Component,
		ContactComponent,
		ResumeviewComponent,
		EditcvComponent,
		DashboardComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgApexchartsModule,
		NgxPaginationModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: "", component: HomeComponent, pathMatch: "full" },
			{ path: "about", component: AboutComponent },
			{ path: "resume", component: ResumeComponent },
			{ path: "enventnew", component: EnventnewComponent },
			{ path: "contact", component: ContactComponent },
			{ path: "enventnew/inforevent", component: InforeventComponent },
			{ path: "enventnew/inforevent2", component: Inforevent2Component },
			{ path: "createcv", component: CreateCvComponent, canActivate: [AuthGuardService] },
			{ path: "profile", component: ProfileComponent, canActivate: [AuthGuardService] },
			{ path: "profile/resumeview/:id", component: ResumeviewComponent, canActivate: [AuthGuardService] },
			{ path: "profile/edit/:id", component: EditcvComponent, canActivate: [AuthGuardService] },
			{ path: "resume-template", component: ResumeTemplateComponent },
			{ path: "resume-template-lcp", component: ResumeTemplateLCPComponent },
			{ path: "resume-template-hhm", component: ResumeTemplateHHMComponent },
			{ path: "resume-template-hlh", component: ResumeTemplateHLHComponent },
			{ path: "resume-template-tnn", component: ResumeTemplateTNNComponent },
			{ path: "resume-template-htm", component: ResumeTemplateHTMComponent },
			{ path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService] },
		]),
		NgbModule,
	],
	providers: [{
		provide: 'SocialAuthServiceConfig',
		useValue: {
			autoLogin: true,
			providers: [
				{
					id: GoogleLoginProvider.PROVIDER_ID,
					provider: new GoogleLoginProvider('869931608751-188lc99vu7t7eeskbq9h9itcuvb5oekp.apps.googleusercontent.com') // your client id
				}
			]
		}
	}, CreateCvService, SocialAuthService],
	bootstrap: [AppComponent],
})
export class AppModule {
}
