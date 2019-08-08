import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { User } from '../user';
import { Post } from '../post';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  posts: Post[];
  networks: string[] = [];

  constructor(private http: HttpClient, private dataService: DataService , private messageService: MessageService ) { }

  ngOnInit() {
    this.messageService
  }

  backendTest():void{
      this.messageService.add('DashboardComponent: backendTest');
      this.dataService.getNetworks().subscribe(
        data=> this.networks = data
      )
      if (this.networks == []){
        this.messageService.add('DashboardComponent: backendTest assigned');
      }
      else {
        this.messageService.add('DashboardComponent: backendTest didnt work');
      }
      
     
  }

  jsonTest():void{
    this.messageService.add('jsonTest');
    this.dataService.getPosts().subscribe(
      data => this.posts = data
    )
  }

}
