import { Component } from '@angular/core';
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
  }
}
