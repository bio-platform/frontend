import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Limit } from './models/limit';
import { Network } from './models/network';
import { CookieService} from 'ngx-cookie-service';
import { Token } from './models/token';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL =  "http://bio-portal.metacentrum.cz/api"//"http://localhost:5000"; //80/api
  private headers = new HttpHeaders();
  private response = new HttpResponse();
  
  
  
  constructor(private httpClient: HttpClient , private messageService: MessageService, private cookieService:CookieService, private router:Router) { }

  login(inputToken:Token):void{
      //console.log("DataService:login => "+JSON.stringify(inputToken));
        
      this.httpClient.post(this.apiURL+"/",inputToken,{observe: 'response'}).toPromise().then((data:any) => {
        console.log('isLogged = true');
        this.router.navigate(['dashboard']);

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
    //return this.httpClient.get<Network[]>(this.apiURL+"network/");
//}

  /*postInstance():void{
    this.httpClient.post(this.apiURL/instances,instanceData,{observe: 'response'}).toPromise().then((data:any) => {
      console.log('isLogged = true');
      this.router.navigate(['dashboard']);

    },
    (err:any) =>{
      console.log(err);
    });
    
  }*/
   
  

}
