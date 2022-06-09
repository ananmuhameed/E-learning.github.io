import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';
import { StudentDetails } from 'src/app/main-classes/student-details';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  Eachstudent: StudentDetails[] = [];
  private Id:string=" ";
  constructor(private studentsService: StudentsService,private http: HttpClient, private route: ActivatedRoute, private router:Router) { }
  // _studentDetails: StudentDetails = 
  //   { "name": "Rawan", "gender": "Female","Fathersname": "Ayman","Mothersname" : "Sahar","DOB" : "17/11/2002","Religion":"Muslim",
  //   "FatherOccupation":"Doctor","Email":"Something@something.com","AdmissionDate":"1/1/2020","Class":1,"Section":5,
  //   "Roll":16,"Address":"Maadi","phone":"012345","id":16,"grade":2,"program":"Artificial Intelligence","gpa":4};
    // insertStudentDetails(studentDetails: StudentDetails): Observable<any> {
    //   return this.http.post<StudentDetails>(environment.baseUrl + 'StudentDetails.json/', JSON.stringify(studentDetails), this.httpOptions);
    // }
  ngOnInit(): void { 
    this.route.params.subscribe(params => { //emsheely 3ala el params elly fel path
      this.Id = params['Id']; 
      console.log(this.Id);
   });
    this.studentsService.getSingleStudentDetails(this.Id).subscribe(result => {

      console.log(result)
      // Object.keys(result).forEach((key) => {
      //   this.Eachstudent.push(result[key]);
      // });
      this.Eachstudent.push(result);
   
    })
    // console.log(this.Eachstudent);

  }
  DeleteStudent(){
    
     this.studentsService.DeletesingleStudent(this.Id).subscribe(result => {
      this.router.navigate(["/all-student-details"]);
     });
      // router redirect to another page after deletion student with specifC id 
      // any url must start with frorward slash
  }
}
