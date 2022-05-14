import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resume-template',
	templateUrl: './resume-template.component.html',
	styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {

	collection = [
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},
		{
			name: "Lưu Chính Phương",
			position: 'Marketing Executive',
			img: '../../assets/Image/Rectangle 50.png',
			link: 'resume-template-lcp'
		},
		{
			name: "Tống Nhất Ngạo",
			position: 'Process Engineer',
			img: '../../assets/Image/TNN.png',
			link: 'resume-template-tnn'
		},
		{
			name: "Lư Diễm Du",
			position: 'Line Manager',
			img: '../../assets/Image/LDD.png',
			link: 'resume-template-nvt'
		},
		{
			name: "Hồng Tú Mỹ",
			position: 'Ophthalmologist',
			img: '../../assets/Image/HTM.png',
			link: 'resume-template-htm'
		},
		{
			name: "Hoàng Liên Hoa",
			position: 'Speech-language Pathologist',
			img: '../../assets/Image/HLH.png',
			link: 'resume-template-hlh'
		},
		{
			name: "Chu Nhã My",
			position: 'Dental Hygienist',
			img: '../../assets/Image/CNM.png',
			link: 'resume-template-hhm'
		},
		{
			name: "Tôn Thượng Hương",
			position: 'Cyber Calamity Forecaster',
			img: '../../assets/Image/TTH.png',
			link: 'resume-template-hhm'
		},
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},
		{
			name: 'Hà Hoàng Minh',
			position: 'Sales Manager',
			img: '../../assets/Image/Ellipse 3.png',
			link: 'resume-template-hhm'
		},


	];
	page: number = 1;
	constructor() { }

	ngOnInit(): void {
	}

}
