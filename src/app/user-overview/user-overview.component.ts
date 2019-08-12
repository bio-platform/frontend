import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { Limit } from '../limit';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  private limits:Limit;

  public pieChartLabels = ['Used', 'Available'];
  public pieChartData = [100];
  public pieChartType = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#607D8B', 'rgba(148,159,177,0.2)'],
    
 }];

  constructor( private dataService: DataService, private messageServide : MessageService) { }

  ngOnInit() {
    this.dataService.getLimit().subscribe(
      data=> this.limits = data
    )
    //this.pieChartData.push(this.limits.floating_ips.limit);
  }


}
