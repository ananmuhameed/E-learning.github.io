import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpRequest,HttpEvent,HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentDetails } from '../main-classes/student-details';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  httpOptions = {
    headers: new HttpHeaders({
      
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'


    })
  };
  constructor(private http: HttpClient) { }
  getStudentsDetails(): Observable<any>{
    return this.http.get<StudentDetails>(environment.baseUrl + 'StudentDetails.json', this.httpOptions);
  }
  insertStudentDetails(studentDetails: StudentDetails): Observable<any> {
    return this.http.post<StudentDetails>(environment.baseUrl + 'StudentDetails.json/', JSON.stringify(studentDetails), this.httpOptions);
  }
  getSingleStudentDetails(Id:string): Observable<any> {
    return this.http.get<StudentDetails>(environment.baseUrl + 'StudentDetails/'+Id+'.json', this.httpOptions);
    
  }
  DeletesingleStudent(Id:string): Observable<any> {
    return this.http.delete<StudentDetails>(environment.baseUrl + 'StudentDetails/'+Id+'.json', this.httpOptions);
    
  }

  SearchStudent(text:string): Observable<any>{
    // ? filter query // supercharacter from firebase 
    
    return this.http.get<StudentDetails>(environment.baseUrl + 'StudentDetails.json?orderBy="name"&startAt="'+text.trim()+'"&endAt="'+text.trim()+'\uf8ff"', this.httpOptions);
  }

  AddCourse(Id:string, course:any): Observable<any> {
    return this.http.post<StudentDetails>(environment.baseUrl + 'StudentDetails/'+Id+'.json', JSON.stringify(course) ,this.httpOptions);
    
  }

}
