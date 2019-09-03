import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Limit } from './models/limit';
import { Network } from './models/network';
import { Token } from './models/token';
import { Keypair} from './models/key_pair';
import { MetaData } from './models/metadata';
import { InstanceData } from './models/instance_data';
import { Instance } from './models/instance';
import { CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL =  "http://localhost:5000"//"http://bio-portal.metacentrum.cz/api"
  private headers = new HttpHeaders();
  private response = new HttpResponse();
  private instance: Instance;
  
  
  
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
      return this.httpClient.get<Limit>(this.apiURL+"/limits/");
  }

  getNetwork (): Observable<Network[]> {
    return this.httpClient.get<Network[]>(this.apiURL+"/networks/");
  }

  getKeys (): Observable<Keypair[]> {
    return this.httpClient.get<Keypair[]>(this.apiURL+"/keypairs/");
  }

  getInstances (): Observable<Instance[]>{
    return this.httpClient.get<Instance[]>(this.apiURL+"/instances/");  
  }

  postInstance(instanceData:InstanceData):Instance{
    this.httpClient.post(this.apiURL+"/instances/",instanceData,{observe: 'response'}).toPromise().then((data:any) => {
      this.instance = data;
  
    },
    (err:any) =>{
      console.log(err);
    });
    return this.instance;
    
  }

  putMetadata(instance:Instance, metaData:MetaData):void{
    this.httpClient.put(this.apiURL+"/metadata/"+instance.id+"/",metaData,{observe: 'response'}).toPromise().then((data:any) => {
      console.log("data:"+data);
    },
    (err:any) =>{
      console.log("err:"+JSON.stringify(err));
    });    
  }
   
  

}