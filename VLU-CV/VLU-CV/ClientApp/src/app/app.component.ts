import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  isShowFirstTime: boolean = (location.href=='http://localhost:4200/'||location.href=='http://localhost:4200/about')?true:false;
  public navOnClick() {
    if(location.href=='http://localhost:4200/'){
      this.isShowFirstTime=true;
    }
    else if(location.href=='http://localhost:4200/about'){
      this.isShowFirstTime=true;
    }
    else{
      this.isShowFirstTime=false;
      console.log(location.href)
    }
  }
}
