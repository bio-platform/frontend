import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  public pieChartLabels = ['Used', 'Available'];
  public pieChartData = [200, 150];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
