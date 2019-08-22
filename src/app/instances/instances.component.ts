import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Network} from '../network';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {
  private networks:Network[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    //this.dataService.getNetwork().subscribe(
      //data=> {
        //this.networks = data
      //}
    //)
  }
}
