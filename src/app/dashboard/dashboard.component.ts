import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Post } from '../post';
import { Limit } from '../limit'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[];
  networks: string[] = [];
  limits:Limit;

  constructor(private http: HttpClient, private dataService: DataService , private messageService: MessageService ) { }

  ngOnInit() {
  }

  apiTest():void{
      this.messageService.add('DashboardComponent: apiTest');
      this.dataService.getLimit().subscribe(
        data=> {this.limits = new Limit(data); 
          this.messageService.add('DashboardComponent: subscribe');}
      )
     
  }

  jsonTest():void{
    this.messageService.add('jsonTest');
    this.dataService.getPosts().subscribe(
      data => this.posts = data
    )
  }

}
