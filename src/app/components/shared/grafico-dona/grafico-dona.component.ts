import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  // @Input () public doughnutChartLabels: string[] = [];
  // @Input () public doughnutChartData: number[] = [];
  // @Input () public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
