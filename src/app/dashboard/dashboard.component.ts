import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Limit } from '../models/limit'
import { MessageService } from '../message.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';


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
    public selected_mem;
    public selected_cpu;
    public selected_disk;

  constructor(
    public dialogRef: MatDialogRef < Dialogview >) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


