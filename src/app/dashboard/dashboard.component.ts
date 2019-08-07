import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { User } from '../user';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user: User;

  constructor(private http: HttpClient, private dataService: DataService , private messageService: MessageService ) { }

  ngOnInit() {
  }

  backendTest():void{
      this.messageService.add('DashboardComponent: backendTest');
      this.dataService.getNetworks().subscribe(
        //networks => this.user.networks = networks

      )
  }

}
