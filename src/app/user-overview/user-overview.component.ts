import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  public pieChartLabels = ['Used', 'Available'];
  public pieChartData = [200, 150];
  public pieChartType = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#607D8B', 'rgba(148,159,177,0.2)'],
    
 }];

  constructor() { }

  ngOnInit() {
  }

}
