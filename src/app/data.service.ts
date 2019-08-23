import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Limit } from './models/limit';
import { Network } from './models/network';
import { CookieService} from 'ngx-cookie-service';
import { Token } from './models/token';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = "http://localhost:5000";
  private headers = new HttpHeaders();
  private response = new HttpResponse();
  
  
  
  constructor(private httpClient: HttpClient , private messageService: MessageService, private cookieService:CookieService) { }

  login(inputToken:Token):void{
      console.log("DataService:login => "+JSON.stringify(inputToken));
        
      this.httpClient.post(this.apiURL,inputToken,{observe: 'response'}).toPromise().then((data:any) => {
        console.log(data);
      },
      (err:any) =>{
        console.log(err);
      });
         
  
  }

  getLimit (): Observable<Limit> {
     
      this.messageService.add('Dataservice: getLimit');
      return this.httpClient.get<Limit>(this.apiURL+"/limits/");
  }

  //getNetwork (): Observable<Network[]> {
    //this.messageService.add('Dataservice: getNetwork');
    //return this.httpClient.get<Network[]>(this.apiURL+"/network/");
//}
   
  

}
