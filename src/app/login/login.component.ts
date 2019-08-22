import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private messageService : MessageService, private dataService: DataService) { }

  ngOnInit() {
      this.messageService.add('Login');
  }

  login(token:string):void{
    this.dataService.login(token);
  }

}
