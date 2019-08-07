import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = 'localhost:5050';
  
  constructor(private httpClient: HttpClient , private messageService: MessageService) { }

  getNetworks (): Observable<string[]> {
      this.messageService.add('Dataservice: getNetworks');
      return this.httpClient.get<string[]>(this.apiURL+'/networks/');
  }  

}
