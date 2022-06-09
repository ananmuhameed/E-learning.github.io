import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams ,HttpEventType} from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCourses } from '../main-classes/addCourses';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class NewCourseService {
  httpOptions = {
    headers: new HttpHeaders({   
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };

  constructor(private http: HttpClient) {}

   getCourses():Observable<any>{
    return this.http.get<AddCourses>(environment.baseUrl + 'courses.json/',this.httpOptions);
  }
  insertCourse(courses:AddCourses):Observable<any>{
    return this.http.post<AddCourses>(environment.baseUrl+'courses.json/',
    JSON.stringify(courses),this.httpOptions)};

  getAvailableCourses(facultyName:string):Observable<any> {
    // https://donia-db-default-rtdb.firebaseio.com/courses.json?orderBy="facultiesAssigned"&equalTo="Computer Science"
    return this.http.get<AddCourses>(environment.baseUrl + 'courses.json?orderBy="facultiesAssigned"&equalTo="' + facultyName + '"',this.httpOptions);
  }
  }
