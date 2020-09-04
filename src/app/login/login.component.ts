import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserManager, UserManagerSettings } from 'oidc-client';

import { Token } from '../models/token';
import { Project, ProjectList } from '../models/projects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private token: Token;


  constructor(private router: Router, public dialog: MatDialog, private dataService: DataService) { 
  }

  ngOnInit() {
    let that = this;
    var mgr = new UserManager({
      response_type: 'id_token token',
      scope: 'openid profile email eduperson_entitlement',
      authority: 'https://login.cesnet.cz/oidc/',
      client_id: 'ca73360a-c510-4bc0-afb5-f5c5eee603ca',
      redirect_uri: 'http://bio-portal.metacentrum.cz/callback',
      post_logout_redirect_uri: 'https://bio-portal.metacentrum.cz/',
    })
    
    mgr.getUser().then(function (user) {
      if (user) {
        that.dataService.login({token:user.access_token}).subscribe(data => {
          that.dataService.setUserEmail(user.profile.email);
          that.dataService.setUserName(user.profile.preferred_username);
          //console.log(user.profile.email, user.profile.preferred_username);
          that.openDialog();
        });
        //document.getElementById('result').innerText = "Welcome" + user.profile.name + "!";
      } else {
        mgr.signinRedirect();
      }
    })

  }

  login(inputToken: string): void {
    console.log(inputToken);
    this.token = { token: inputToken };
    this.dataService.login(this.token).subscribe(data => {
      this.openDialog();
    });
    
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(LoginDialog, {
      width: '0px auto;',
      height: '0px auto;'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
})
export class LoginDialog {
  public projects: ProjectList;
  public selectedProject;
  public gotProjects: boolean = false;

  constructor(public dialogRef: MatDialogRef<LoginDialog>,private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getProjects().subscribe(
      data => {
        this.projects = data;
        console.log("Got projects: \n");
        console.log(this.projects);
        this.gotProjects = true;
      })
  }

  putProject(project: Project) {
    this.dataService.putProject(project);
    this.dialogRef.close();
  }

}
