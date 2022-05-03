import { Component, OnInit, ViewChild } from "@angular/core";
import {
	ApexAxisChartSeries,
	ApexChart,
	ChartComponent,
	ApexDataLabels,
	ApexXAxis,
	ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	xaxis: ApexXAxis;
};
import { CreateCvService } from "../../shared/createcv.service";
import { CreateCv, Dashboard } from "../../shared/createcv.model";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	@ViewChild("chart") chart: ChartComponent;
	public chartOptions: Partial<ChartOptions>;
	data: CreateCv[];
	constructor(private createCvService: CreateCvService) {
		this.chartOptions = {
			series: [
				{
					name: "Count",
					data: [0]
				}
			],
			chart: {
				type: "bar",
				height: 350
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: [new Date().getMonth() - 1 + "-" + new Date().getFullYear()]

			}
		};
	}
	ngOnInit(): void {
		this.createCvService.getCV().subscribe(data => {
			this.data = data;
			console.log(this.data);
			this.chartOptions.series = [

				{
					name: "Count",
					data: [this.data.length]
				}
			];
			this.chartOptions.xaxis.categories = [new Date().getMonth() + "-" + new Date().getFullYear()];
		});
	}
}
