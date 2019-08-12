import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Limit } from './limit';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = "http://192.168.99.100:5050";
  private JsonTestApi ="https://jsonplaceholder.typicode.com";
  private headers = new HttpHeaders();
  
  
  constructor(private httpClient: HttpClient , private messageService: MessageService) { }

  getLimit (): Observable<Limit> {
      //let params1 = new HttpParams().set('token',"eyJhbGciOiJub25lIn0.eyJqdGkiOiI5YjBlM2Q2NS1hOTk1LTRhOWMtYTYxNi03ZTI2MmZkYzIzZjIifQ.");
      this.messageService.add('Dataservice: getLimit');
      this.headers.set('Access-Control-Allow-Origin',"*");
      return this.httpClient.get<Limit>(this.apiURL+"/limit/", {headers: this.headers});
  }

  getNetwork (): Observable<any> {
    //let params1 = new HttpParams().set('token',"eyJhbGciOiJub25lIn0.eyJqdGkiOiI5YjBlM2Q2NS1hOTk1LTRhOWMtYTYxNi03ZTI2MmZkYzIzZjIifQ.");
    this.messageService.add('Dataservice: getNetwork');
    return this.httpClient.get<any>(this.apiURL+"/network");
}
   
  
  getPosts (): Observable<any>{  //testing purposes
    return this.httpClient.get(this.JsonTestApi+"/posts");
  }

}
