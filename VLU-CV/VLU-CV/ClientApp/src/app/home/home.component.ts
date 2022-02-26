import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent {
  images = [
    "https://aitcv.ac.vn/wp-content/uploads/2021/09/e63eb8a14d09bb57e218.jpg",
    "https://www.vanlanguni.edu.vn/images/2020/banner/cs3.jpg",
    "https://www.vanlanguni.edu.vn/images/2020/banner/hn.jpg"
  ];
  imageCVsource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOyp3fWuVg6dTdcXj6xOadAmVCLxFERCuiw&usqp=CAU";

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  };
  onClick(event: Event) {
     window.scroll({ top: 0, behavior: 'smooth' });
  } ;
  openResume(event:Event){
    if(document.getElementById("resume_demo").classList.length==2){
      document.getElementById("_padding").style.backgroundColor="#EDEDED";
      document.getElementById("resume_demo").classList.remove("_hidden");
      document.getElementById("resume_demo").style.animationName="visibleFrame";
      document.getElementById("resume_demo").style.animationDuration="2s";
      document.getElementById("resume_demo_image").style.animationName="rotate180deg";
      document.getElementById("resume_demo_image").style.animationDuration="1.5s";
      document.getElementById("resume_demo_image").style.transform="rotate(180deg)";
    }
    else{
      document.getElementById("resume_demo").style.animationName="hiddenFrame";
      document.getElementById("resume_demo").style.animationDuration="2s";
      document.getElementById("_padding").style.backgroundColor="white";
      document.getElementById("resume_demo_image").style.animationName="rotate0deg";
      document.getElementById("resume_demo_image").style.animationDuration="1.5s";
      document.getElementById("resume_demo_image").style.transform="rotate(0deg)";
      setTimeout(() => { 
        document.getElementById("resume_demo").classList.add("_hidden");
       }, 2000);
    }
  }
}
