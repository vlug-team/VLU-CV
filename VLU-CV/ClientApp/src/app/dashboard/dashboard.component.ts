import { Component, OnInit, ViewChild } from "@angular/core";
import {
	ApexAxisChartSeries,
	ApexChart,
	ChartComponent,
	ApexDataLabels,
	ApexXAxis,
	ApexPlotOptions,
	ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	xaxis: ApexXAxis;
	title: ApexTitleSubtitle;
};
import { CreateCvService } from "../../shared/createcv.service";
import { Dashboard } from "../../shared/createcv.model";
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	@ViewChild("chart") chart: ChartComponent;
	public chartOptions: Partial<ChartOptions>;
	data: Dashboard[];
	count: number;
	countofmonth: number;
	month: any;
	userSocial: SocialUser;
	constructor(private createCvService: CreateCvService, private router: Router, private user: SocialAuthService) {
		this.chartOptions = {

			chart: {
				type: "area",
				height: 450,
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			dataLabels: {
				enabled: false
			},
			title: {
				text: "Number of CVs"
			},


		};
	}
	ngOnInit(): void {
		this.user.authState.subscribe((user) => {
			this.userSocial = user;
			if (user.id !== "100099488054233697335") {
				this.router.navigate(["/"]);
			}
		});
		this.createCvService.getcount().subscribe(data => {
			this.count = data
		});
		this.createCvService.getcountofmonth().subscribe(data => {
			this.countofmonth = data
		}
		);

		this.createCvService.getalldashboard().subscribe(data => {

			this.data = data;
			this.chartOptions.series = [
				{
					name: "Count",
					data: this.data.map(x => x.count)
				},
			];
			this.chartOptions.xaxis = {
				categories: this.data.map(x => x.month)
			};
		});
	}
}
