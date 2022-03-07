import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from "./resume/resume.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    AppFooterComponent,
    ResumeTemplateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "about", component: AboutComponent },
      { path: "resume", component: ResumeComponent },
      { path: "resume-template", component:  ResumeTemplateComponent},
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
