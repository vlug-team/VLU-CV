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
  imageBranch = [
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-dong-phuong-hoc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-cong-nghe-ky-thuat-moi-truong.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-cong-nghe-sinh-hoc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thiet-ke-cong-nghiep.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thiet-ke-do-hoa.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thiet-ke-thoi-trang1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thiet-ke-noi-that.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thanh-nhac.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-piano.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-van-hoc-ung-dung1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-quan-he-cong-chung1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-kinh-doanh-thuong-mai1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-quan-tri-kinh-doanh1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ke-toan1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-tai-chinh-ngan-hang1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ky-thuat-nhiet1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ky-thuat-phan-mem1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-cong-nghe-thong-tin1.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-thiet-ke-kien-truc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ky-thuat-xay-dung.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-quan-ly-xay-dung.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ky-thuat-cong-trinh-xay-dung.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-luat-kinh-te.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-dieu-duong.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ky-thuat-xet-nghiem-y-hoc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-quan-tri-dich-vu-du-lich-lu-hanh.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-quan-tri-khach-san.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-ngon-ngu-anh.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-tam-ly-hoc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-duoc-hoc.png",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-luat.jpg",
    "https://ejob.vanlanguni.edu.vn/Assets/Img_Subjects/vlu-cong-nghe-oto.png"
  ];
  imageBranchFor=[];
  imageCVsource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOyp3fWuVg6dTdcXj6xOadAmVCLxFERCuiw&usqp=CAU";

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    for(var i =0;i<this.imageBranch.length-2;i++){
      var obj = {img1:this.imageBranch[i],img2:this.imageBranch[i+1],img3:this.imageBranch[i+2]};
      this.imageBranchFor.push(obj);
    }
    this.imageBranchFor.push({img1:this.imageBranch[this.imageBranch.length-2],img2:this.imageBranch[this.imageBranch.length-1],img3:this.imageBranch[0]});
    this.imageBranchFor.push({img1:this.imageBranch[this.imageBranch.length-1],img2:this.imageBranch[0],img3:this.imageBranch[1]});
    console.log(this.imageBranchFor);
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
  mouseEnter(){
    document.getElementById("create_resume").style.animationName="longMore";
    document.getElementById("create_resume").style.animationDuration="1s";
    document.getElementById("create_resume_label").style.animationName="visibleFrame";
    document.getElementById("create_resume_label").style.animationDuration="1s";
    document.getElementById("create_resume").style.width="150px";
    document.getElementById("create_resume_image").style.left="5px";
    document.getElementById("create_resume_label").style.left="35px";
    document.getElementById("create_resume_label").classList.remove("_hidden");
    document.getElementById("create_resume_label").innerHTML="Tạo Resume";
 }
 mouseLeave(){
  document.getElementById("create_resume").style.animationName="shortMore";
  document.getElementById("create_resume").style.animationDuration="1s";
  document.getElementById("create_resume_label").style.animationName="hiddenFrame";
  document.getElementById("create_resume_label").style.animationDuration="1s";
  document.getElementById("create_resume").style.width="45px";
  document.getElementById("create_resume_image").style.left="5px";setTimeout(() => { 
    document.getElementById("create_resume_label").classList.add("_hidden");
  }, 800);
}
}
