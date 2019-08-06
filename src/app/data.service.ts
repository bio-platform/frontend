import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  instances: string[] = [];

  constructor(private httpClient: HttpClient) { }

  getInstances():void{
      this.instances.add(this.httpClient.get('localhost:5050'));  
  }
}
