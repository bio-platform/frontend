import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Limit } from '../models/limit'
import { Keypair } from '../models/key_pair';
import { Network } from '../models/network';
import { MessageService } from '../message.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InstanceData } from '../models/instance_data';
import { Instance } from '../models/instance';
import { MetaData } from '../models/metadata';


export interface DialogData {
  cpu: number;
  mem: number;
  disk: number;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  networks: string[];
  limits: Limit;

  constructor(private http: HttpClient, private dataService: DataService, private messageService: MessageService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(Dialogview, {
      width: '500px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-view',
  templateUrl: 'dialog-view.html',
})
export class Dialogview {
  public selectedMem;
  public selectedCpu;
  public selectedDisk;
  private keys: Keypair[];
  private networks: Network[];
  private instanceData = new InstanceData();
  private instance = new Instance();
  private instances: Instance[];
  private metaData= new MetaData();

  constructor(
    public dialogRef: MatDialogRef<Dialogview>, private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getKeys().subscribe(
      data => {
        this.keys = data
        this.instanceData.key_name = this.keys[0].name;
        console.log(JSON.stringify(this.keys));
      },
      err => {

      }
    )

    this.dataService.getNetwork().subscribe(
      data => {
        this.networks = data
        this.instanceData.network_id = this.networks[1].id;
      },
      err => {

      }
    )
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  onNoClick(login:string,email:string): void {
    this.metaData.metadata = {Bioclass_user: login, Bioclass_email: email};
    console.log(JSON.stringify(this.metaData));
    if (this.keys == null) {

    }
    if (this.networks == null) {

    }
    this.dataService.postInstance(this.instanceData);
    this.delay(4000).then(any => {
      this.dataService.getInstances().subscribe(data => {
        this.instances = data;
        for (let i = 0; i < this.instances.length; i++) {
          if (this.instances[i].name == "new_server_1") {
            this.instance = this.instances[i];
            break;
          }
        }
        //console.log("this.instance.id : " + JSON.stringify(this.instance.id));
        this.dataService.putMetadata(this.instance,this.metaData);
        this.dialogRef.close();

      });


    })
  }

}


