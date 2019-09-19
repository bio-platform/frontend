import { Component, OnInit } from '@angular/core';
import { UserManager } from 'oidc-client';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    let that = this;
    new UserManager({}).signinRedirectCallback().then(function () {
        console.log("got logged");
        that.router.navigate(["./login"]);
    }).catch(function (e) {
        console.log(e);
        //document.getElementById('error_explanation').innerText = "problem occured when authentication to OpenID Connect Server";
        //document.getElementById('error_place').innerText = e;
    });
  }

}
