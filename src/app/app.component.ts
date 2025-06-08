import { Component } from '@angular/core';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';

@Component({
  selector: 'app-root',
  imports: [ChartLineComponent, ChartBarComponent, ChartDoughnutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-19-charts';
}
