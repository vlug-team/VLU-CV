import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  isShowFirstTime: boolean = (location.href=='http://localhost:4200/authentication/login')?false:true;
  public navOnClick() {
    if(location.href=='http://localhost:4200/authentication/login'){
      this.isShowFirstTime=false;
    }
    else{
      this.isShowFirstTime=true;
    }
  }
}
