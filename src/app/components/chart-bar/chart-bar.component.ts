import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  imports: [BaseChartDirective],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.css',
})
export class ChartBarComponent {
  chartClicked($event: { event?: ChartEvent; active?: object[] }) {
    throw new Error('Method not implemented.');
  }
  chartHovered($event: { event: ChartEvent; active: object[] }) {
    throw new Error('Method not implemented.');
  }
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };
}
