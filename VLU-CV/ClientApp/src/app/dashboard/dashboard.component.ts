import { Component, OnInit, ViewChild } from '@angular/core';
import {
	ChartComponent,
	ApexAxisChartSeries,
	ApexChart,
	ApexYAxis,
	ApexXAxis,
	ApexTitleSubtitle,
	ApexDataLabels,
	ApexGrid,
	ApexStroke
} from "ng-apexcharts";
import { CreateCvService } from "../../shared/createcv.service";
import { CreateCv, Dashboard } from "../../shared/createcv.model";


export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	dataLabels: ApexDataLabels;
	grid: ApexGrid;
	stroke: ApexStroke;
	title: ApexTitleSubtitle;
	yaxis: ApexYAxis;
};
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	@ViewChild("chart") chart: ChartComponent;
	public chartOptions: Partial<ChartOptions>;
	datacv: CreateCv[];
	datatest: Dashboard[];
	x: any;
	y: any;
	constructor(private service: CreateCvService) {
		this.chartOptions = {
			chart: {
				height: 400,
				type: "line",
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight"
			},
			title: {
				text: "Resume Create by Month",
				align: "left"
			},
			grid: {
				row: {
					colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
					opacity: 10
				}
			},
		};
	}

	ngOnInit(): void {
		this.service.getCV().subscribe(data => {
			this.datacv = data;
			length = this.datacv.length;

		});
		this.service.getdashboard().subscribe(data => {
			this.datatest = data;
		});

		for (let i = 0; i <= length; i++) {
			this.x = this.datatest[i].countCV;
			this.y = this.datatest[i].mouth;
			this.chartOptions.series[0].data.push(this.x);
			this.chartOptions.xaxis[0].categories.push(this.y);
			this.chart.updateOptions([this.chartOptions.series, this.chartOptions.xaxis]);

		}
		console.log(length)
	}

}
