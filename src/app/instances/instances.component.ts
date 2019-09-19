import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Network} from '../models/network';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {
  public networks:Network[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    //this.dataService.getNetwork().subscribe(
      //data=> {
        //this.networks = data
      //}
    //)
  }
}
