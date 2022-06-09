import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginDetails } from "../main-classes/login-details";

@Injectable()

export class LoginService{

    httpOptions = {
        headers: new HttpHeaders({
          
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          //??
          'content-type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    
    
        })
      };

    constructor(private http:HttpClient){}

    getUser():Observable<any>{
        return this.http.get<LoginDetails>(environment.baseUrl + 'AllUsersInfo.json', this.httpOptions);
    }



}