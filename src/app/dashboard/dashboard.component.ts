import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Limit } from '../models/limit'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  networks: string[];
  limits:Limit;

  constructor(private http: HttpClient, private dataService: DataService , private messageService: MessageService ) { }

  ngOnInit() {
  }

  apiTest():void{
      this.messageService.add('DashboardComponent: apiTest');
      this.dataService.getLimit().subscribe(
        data=> {this.limits = data; 
        this.messageService.add('Limit : '+JSON.stringify(this.limits));}
      )
     
  }

}
