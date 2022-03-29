import { Component } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	providers: [NgbCarouselConfig],
})
export class HomeComponent {
	images = [
		"https://aitcv.ac.vn/wp-content/uploads/2021/09/e63eb8a14d09bb57e218.jpg",
		"https://www.vanlanguni.edu.vn/images/2020/banner/cs3.jpg",
		"https://www.vanlanguni.edu.vn/images/2020/banner/hn.jpg",
	];
	imageBranch = [
		"../../assets/32/1.png",
		"../../assets/32/2.png",
		"../../assets/32/3.png",
		"../../assets/32/4.png",
		"../../assets/32/5.png",
		"../../assets/32/6.png",
		"../../assets/32/7.png",
		"../../assets/32/8.png",
		"../../assets/32/9.png",
		"../../assets/32/10.png",
		"../../assets/32/11.png",
		"../../assets/32/12.png",
		"../../assets/32/13.png",
		"../../assets/32/14.png",
		"../../assets/32/15.jpg",
		"../../assets/32/16.png",
		"../../assets/32/17.png",
		"../../assets/32/18.png",
		"../../assets/32/19.png",
		"../../assets/32/20.png",
		"../../assets/32/21.png",
		"../../assets/32/22.png",
		"../../assets/32/23.png",
		"../../assets/32/24.png",
		"../../assets/32/25.png",
		"../../assets/32/26.png",
		"../../assets/32/27.png",
		"../../assets/32/28.png",
		"../../assets/32/29.png",
		"../../assets/32/30.png",
		"../../assets/32/31.png",
		"../../assets/32/32.png",
	];
	imageBranchFor = [];
	imageCVsource =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOyp3fWuVg6dTdcXj6xOadAmVCLxFERCuiw&usqp=CAU";

	constructor(config: NgbCarouselConfig) {
		config.interval = 2000;
		config.keyboard = true;
		config.pauseOnHover = true;
		for (var i = 0; i < this.imageBranch.length - 2; i++) {
			var obj = {
				img1: this.imageBranch[i],
				img2: this.imageBranch[i + 1],
				img3: this.imageBranch[i + 2],
			};
			this.imageBranchFor.push(obj);
		}
		this.imageBranchFor.push({
			img1: this.imageBranch[this.imageBranch.length - 2],
			img2: this.imageBranch[this.imageBranch.length - 1],
			img3: this.imageBranch[0],
		});
		this.imageBranchFor.push({
			img1: this.imageBranch[this.imageBranch.length - 1],
			img2: this.imageBranch[0],
			img3: this.imageBranch[1],
		});
		console.log(this.imageBranchFor);
	}
	onClick(event: Event) {
		window.scroll({ top: 0, behavior: "smooth" });
	}
	playVideo(event: Event) {
		document.getElementById("video_vlu").classList.remove("_hidden");
		document.getElementById("video_pause").classList.add("_hidden");
		document.getElementById("video_pause").style.display = "none";
		var vid = <HTMLVideoElement>document.getElementById("video_vlu");
		vid.play();
	}
	openResume(event: Event) {
		if (document.getElementById("resume_demo").classList.length == 2) {
			document.getElementById("_padding").style.backgroundColor = "#EDEDED";
			document.getElementById("resume_demo").classList.remove("_hidden");
			document.getElementById("resume_demo").style.animationName =
				"visibleFrame";
			document.getElementById("resume_demo").style.animationDuration = "2s";
			document.getElementById("resume_demo_image").style.animationName =
				"rotate180deg";
			document.getElementById("resume_demo_image").style.animationDuration =
				"0.5s";
			document.getElementById("resume_demo_image").style.transform =
				"rotate(180deg)";
		} else {
			document.getElementById("resume_demo").style.animationName =
				"hiddenFrame";
			document.getElementById("resume_demo").style.animationDuration = "2s";
			document.getElementById("_padding").style.backgroundColor = "white";
			document.getElementById("resume_demo_image").style.animationName =
				"rotate0deg";
			document.getElementById("resume_demo_image").style.animationDuration =
				"1.5s";
			document.getElementById("resume_demo_image").style.transform =
				"rotate(0deg)";
			setTimeout(() => {
				document.getElementById("resume_demo").classList.add("_hidden");
			}, 2000);
		}
	}
	mouseEnter() {
		document.getElementById("create_resume").style.animationName = "longMore";
		document.getElementById("create_resume").style.animationDuration = "2s";
		document.getElementById("create_resume_label").style.animationName =
			"visibleFrame";
		document.getElementById("create_resume_label").style.animationDuration =
			"1s";
		document.getElementById("create_resume").style.width = "150px";
		document.getElementById("create_resume_image").style.left = "0px";
		document.getElementById("create_resume_label").style.left = "35px";
		document.getElementById("create_resume_label").classList.remove("_hidden");
		document.getElementById("create_resume_label").innerHTML = "Tạo Resume";
	}
	mouseLeave() {
		document.getElementById("create_resume").style.animationName = "shortMore";
		document.getElementById("create_resume").style.animationDuration = "2s";
		document.getElementById("create_resume_label").style.animationName =
			"hiddenFrame";
		document.getElementById("create_resume_label").style.animationDuration =
			"1s";
		document.getElementById("create_resume").style.width = "45px";
		document.getElementById("create_resume_image").style.left = "5px";
		setTimeout(() => {
			document.getElementById("create_resume_label").classList.add("_hidden");
		}, 20);
	}
}
