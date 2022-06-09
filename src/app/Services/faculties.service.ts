import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FacultyDetails } from '../main-classes/faculty-details';

@Injectable()
export class FacultiesService {
  httpOptions = {
    headers: new HttpHeaders({
      
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'


    })
  };
  constructor(private http: HttpClient) { }

  getFacultyDetails(): Observable<any> {
    return this.http.get<FacultyDetails>(environment.baseUrl + 'FacultyDetails.json', this.httpOptions);
  }
  

  insertFacultyDetails(facultyDetails: FacultyDetails): Observable<any> {
    return this.http.post<FacultyDetails>(environment.baseUrl + 'FacultyDetails.json/', JSON.stringify(facultyDetails), this.httpOptions);
  }
  getSingleFacultyDetails(id:string): Observable<any> {
    return this.http.get<FacultyDetails>(environment.baseUrl + 'FacultyDetails/'+id+'.json', this.httpOptions);
    
  }
}


  //     return[
  // {FacultyName: "Computer Science",NumberofStudents: 1300, DateFounded : '1973/03/4' ,NumberofCourses : 40,SuccessRate: '80%' ,
  // DeanofFaculty: "Dr. Mouneer Amr",NumberofTAs: 135, NumberofProffesors: 100, Address: "Egypt,Cairo"},

  // {FacultyName: "Alsun",NumberofStudents: 2200, DateFounded : '1983/03/4',NumberofCourses : 64,SuccessRate: '60%%' ,
  // DeanofFaculty: "Dr. Omar Nageeb",NumberofTAs: 143, NumberofProffesors: 80, Address: "Egypt,Alex"},

  // {FacultyName: "Science",NumberofStudents: 2400,  DateFounded :'1960/05/20',NumberofCourses :34 ,SuccessRate: '90%' ,
  // DeanofFaculty: "Dr. Hala Sedki",NumberofTAs: 132, NumberofProffesors: 70, Address: "Egypt,Cairo"},

  // {FacultyName: "Applied Arts",NumberofStudents: 870,  DateFounded : '1967/08/25',NumberofCourses : 20,SuccessRate: '50%' ,
  // DeanofFaculty: "Dr. Salma Hamza",NumberofTAs: 144, NumberofProffesors: 100, Address: "Egypt,Cairo"}
  //     ];
