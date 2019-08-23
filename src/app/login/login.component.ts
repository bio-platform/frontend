import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';

import { Token } from '../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private token:Token;


  constructor(private messageService : MessageService, private dataService: DataService) { }

  ngOnInit() {
      this.messageService.add('Login');
      this.token = new Token();
  
  }

  login(inputToken:string):void{
    this.token.setToken(inputToken);
    this.dataService.login(this.token);

}
}
