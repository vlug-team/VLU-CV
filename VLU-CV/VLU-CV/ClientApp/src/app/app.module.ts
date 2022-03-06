import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { ResumeComponent } from "./resume/resume.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    ResumeComponent,
    AboutComponent,
    FetchDataComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "counter", component: CounterComponent },
      { path: "about", component: AboutComponent },
      { path: "resume", component: ResumeComponent },
      { path: "fetch-data", component: FetchDataComponent },
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
