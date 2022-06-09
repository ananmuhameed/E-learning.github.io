import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';
import { StudentDetails } from 'src/app/main-classes/student-details';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-all-students-details',
  templateUrl: './all-students-details.component.html',
  styleUrls: ['./all-students-details.component.css']
})
export class AllStudentsDetailsComponent implements OnInit {

  students: StudentDetails[] = [];
  AllStudents: StudentDetails[] = [];
  deleteBtn:Boolean = false;
  deleteStudents:any[] = [];
  constructor(private studentsService: StudentsService,private router: Router,private http: HttpClient) { }
  // _studentDetails: StudentDetails = 
  //   { "name": "Rawan", "gender": "Female","Fathersname": "Ayman","Mothersname" : "Sahar","DOB" : "17/11/2002","Religion":"Muslim",
  //   "FatherOccupation":"Doctor","Email":"Something@something.com","AdmissionDate":"1/1/2020","Class":1,"Section":5,
  //   "Roll":16,"Address":"Maadi","phone":"012345","id":16,"grade":2,"program":"Artificial Intelligence","gpa":4};
    // insertStudentDetails(studentDetails: StudentDetails): Observable<any> {
    //   return this.http.post<StudentDetails>(environment.baseUrl + 'StudentDetails.json/', JSON.stringify(studentDetails), this.httpOptions);
    // }
  ngOnInit(){  

    
    
    this.studentsService.getStudentsDetails().subscribe(result =>{
    Object.keys(result).forEach((key) => {
      result[key]["Id"] = key; // to add key (id)
     this.students.push(result[key]);  
    });
    })
    this.AllStudents = this.students;
    console.log(this.students);
    

  }
  
  toggleButton() {
    this.deleteBtn = !this.deleteBtn;
  } 

  change_type(id?:string) {
    if (!this.deleteStudents.includes(id)) {
      this.deleteStudents.push(id);
    } else {
      var index = this.deleteStudents.indexOf(id);
      if (index > -1) {
        this.deleteStudents.splice(index, 1);
      }
    }
  }

  deleteButton() {
    
    if (confirm('Are you sure you want to delete the selected students?')) {
      this.deleteStudents.forEach(student => {

        this.studentsService.DeletesingleStudent(student).subscribe(
          result => {
            this.deleteBtn = false;
            this.students = this.students.filter(function (obj) {
              return obj.Id != student;
            })
          }
        )
      })
      
    } else {
      this.deleteBtn = false;
      }
    

  }

  SearchStudent(event: Event){

    let text = (event.target as HTMLInputElement).value; //taking user input,Casting to know user input 
    if (text != "") { 
      this.students = [];
      this.studentsService.SearchStudent((text.charAt(0).toUpperCase())+text.slice(1).toLowerCase()).subscribe(result => {
        Object.keys(result).forEach((key) => {
          result[key]["Id"] = key; // to add key (id)
         this.students.push(result[key]);  
        });
        
      });
    } else {
      this.students = this.AllStudents;
    }
  }
  

}
