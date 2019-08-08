import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = "http://localhost:5050";
  private JsonTestApi ="https://jsonplaceholder.typicode.com";
  
  constructor(private httpClient: HttpClient , private messageService: MessageService) { }

  getNetworks (): Observable<string[]> {
      this.messageService.add('Dataservice: getNetworks');
      return this.httpClient.get<string[]>(this.apiURL+"/networks");
  }
   
  
  getPosts (): Observable<any>{  //testing purposes
    return this.httpClient.get(this.JsonTestApi+"/posts");
  }

}
