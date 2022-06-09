import { HttpClient, HttpHeaders, HttpParams,HttpRequest,HttpEvent,HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestDetails } from '../main-classes/request-details';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  httpOptions = {
    headers: new HttpHeaders({
      
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'


    })
  };

  constructor(private http: HttpClient) { 
    
  }

  getRequestDetails(): Observable<any>{
    return this.http.get<RequestDetails>(environment.baseUrl + 'requests.json', this.httpOptions);
  }

  addRequest(request:RequestDetails): Observable<any> {
    return this.http.post<RequestDetails>(environment.baseUrl + 'requests.json', JSON.stringify(request), this.httpOptions);
  }

  DeletesingRequest(Id:string): Observable<any> {
    return this.http.delete<RequestDetails>(environment.baseUrl + 'requests/'+Id+'.json', this.httpOptions);
  }

}
