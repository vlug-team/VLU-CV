import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-enventnew',
	templateUrl: './enventnew.component.html',
	styleUrls: ['./enventnew.component.css']
})
export class EnventnewComponent implements OnInit {
	totalLegth: number = 0;
	page: number = 1;
	collection = [
		{
			id: 1,
			image: '../../../assets/Listpage/firter.png',
			title: 'Thông tin cuộc thi chinh phục CV, có ngay công việc - Career Catching',
			date: '12/12/2019',
			content: "Cách để CV của bạn được chuyên viên sửa chữa và được nhà tuyển dụng trực tiếp xem ...",
			link: "/enventnew/inforevent"
		},
		{
			id: 2,
			image: '../../../assets/Listpage/resume-event.jpg',
			title: 'Các yếu tố giúp Resume của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ...",
			link: "/enventnew/inforevent2"
		},
		{
			id: 3,
			image: '../../../assets/Listpage/interviewing.jpg',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		},
		{
			id: 4,
			image: '../../../assets/Listpage/mangxahoi.png',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		},
		{
			id: 5,
			image: '../../../assets/Listpage/tranhkhiphongvan.jpg',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		},
		{
			id: 6,
			image: '../../../assets/Listpage/vlupanel.png',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		},
		{
			id: 7,
			image: '../../../assets/Listpage/vlupanel.png',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		},
		{
			id: 8,
			image: '../../../assets/Listpage/vlujob.png',
			title: 'Các yếu tố giúp CV của bạn trở nên ấn tượng hơn trong mắt nhà tuyển dụng',
			date: '12/12/2019',
			content: "Bật mí bí quyết trình bày CV gây ấn tượng với nhà tuyển dụng ..."
		}
	];

	ngOnInit(): void {
	}

}

