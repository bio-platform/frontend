import { Component, OnInit } from '@angular/core';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private navlinks:string[] = ["Summary","Instances","Networks"];

  constructor(private messageService : MessageService) { }

  ngOnInit() {
  }

}
