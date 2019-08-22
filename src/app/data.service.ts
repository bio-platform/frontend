import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Limit } from './limit';
//import { Options } from 'selenium-webdriver';
import { Network } from './network';
import { CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = "http://localhost:5000/";
  private headers = new HttpHeaders();
  
  
  constructor(private httpClient: HttpClient , private messageService: MessageService, private cookieService:CookieService) { }

  public ngOnInit():void{
    //this.cookieService.set('token',"eyJqa3UiOiJodHRwczpcL1wvbG9naW4uY2VzbmV0LmN6XC9vaWRjXC9qd2siLCJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwZWUwY2I5MzdmOWU5NmMzODA3OWVhNDU3ZTc1MWM5YjRkOWI5MGFkQGVpbmZyYS5jZXNuZXQuY3oiLCJhenAiOiJmYTA0MGY5ZS1hZTViLTRmYzItOWNlYS03ZmFiNjcxMmM3NzMiLCJzY29wZSI6ImVkdVBlcnNvbkVudGl0bGVtZW50IGZvcndhcmRlZEVudGl0bGVtZW50IG9wZW5pZCBwcm9maWxlIG9mZmxpbmVfYWNjZXNzIGVkdV9wZXJzb25fZW50aXRsZW1lbnRzIGVtYWlsIiwiaXNzIjoiaHR0cHM6XC9cL2xvZ2luLmNlc25ldC5jelwvb2lkY1wvIiwiZXhwIjoxNTY2NDc3MTA2LCJpYXQiOjE1NjY0NzM1MDYsImp0aSI6Ijg3NDA3OTZkLWNhZGUtNGRlMy04OGVjLTgxMWNlOWFiZjFhOSJ9.ScTq7jRcz6NuADIrLknx-HkgWHgQBSSq4nMpP8lNUNpQ28HzIjwehkA4oOKTumnFy_rCv_xM-XE6G5mOfLQqgrpayJkw8RxoS7PeDiCVkzu24qpNJ7J27HCZ_Ybmqbh5o2_05LshenRxXAbV6rXhlabL_vJflAQwoVW9mx4HY8wg0voC6Y__2ByzHhMKuFwgbQmiHmTfqNrd0I4yPT7vLbJ_uwi8liuJEMzwRlVdeCEaoP3sTDoIig-Lj1jkeWT70xzLfceltj41ZTxO6BP9kCVHp3Ek9NqkVOyVGafgb78ujPd-QuPVlgzpUCHP_8KLgdwi-dxF_lw1M1rcTTndvg");
  }

  login(token:string):void{
        console.log("DataService:login");
       this.httpClient.post(this.apiURL,JSON.stringify(token));
  
  }

  getLimit (): Observable<Limit> {
      let headers1 = new HttpHeaders();
      //this.cookieService.set('token',"eyJqa3UiOiJodHRwczpcL1wvbG9naW4uY2VzbmV0LmN6XC9vaWRjXC9qd2siLCJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwZWUwY2I5MzdmOWU5NmMzODA3OWVhNDU3ZTc1MWM5YjRkOWI5MGFkQGVpbmZyYS5jZXNuZXQuY3oiLCJhenAiOiJmYTA0MGY5ZS1hZTViLTRmYzItOWNlYS03ZmFiNjcxMmM3NzMiLCJzY29wZSI6ImVkdVBlcnNvbkVudGl0bGVtZW50IGZvcndhcmRlZEVudGl0bGVtZW50IG9wZW5pZCBwcm9maWxlIG9mZmxpbmVfYWNjZXNzIGVkdV9wZXJzb25fZW50aXRsZW1lbnRzIGVtYWlsIiwiaXNzIjoiaHR0cHM6XC9cL2xvZ2luLmNlc25ldC5jelwvb2lkY1wvIiwiZXhwIjoxNTY2NDc3MTA2LCJpYXQiOjE1NjY0NzM1MDYsImp0aSI6Ijg3NDA3OTZkLWNhZGUtNGRlMy04OGVjLTgxMWNlOWFiZjFhOSJ9.ScTq7jRcz6NuADIrLknx-HkgWHgQBSSq4nMpP8lNUNpQ28HzIjwehkA4oOKTumnFy_rCv_xM-XE6G5mOfLQqgrpayJkw8RxoS7PeDiCVkzu24qpNJ7J27HCZ_Ybmqbh5o2_05LshenRxXAbV6rXhlabL_vJflAQwoVW9mx4HY8wg0voC6Y__2ByzHhMKuFwgbQmiHmTfqNrd0I4yPT7vLbJ_uwi8liuJEMzwRlVdeCEaoP3sTDoIig-Lj1jkeWT70xzLfceltj41ZTxO6BP9kCVHp3Ek9NqkVOyVGafgb78ujPd-QuPVlgzpUCHP_8KLgdwi-dxF_lw1M1rcTTndvg");

      this.messageService.add('Dataservice: getLimit');
      return this.httpClient.get<Limit>(this.apiURL+"limits/");
  }

  //getNetwork (): Observable<Network[]> {
    //this.messageService.add('Dataservice: getNetwork');
    //return this.httpClient.get<Network[]>(this.apiURL+"/network/");
//}
   
  

}
