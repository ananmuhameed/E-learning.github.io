import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Services/request.service';
import { RequestDetails } from 'src/app/main-classes/request-details';
import { StudentsService } from 'src/app/Services/students.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests:RequestDetails[] = [];
  constructor(private requestServ: RequestService, private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.requestServ.getRequestDetails().subscribe(result => {
      Object.keys(result).forEach((key) => {
        result[key]["Id"] = key; // to add key (id)
       this.requests.push(result[key]);  
      });
    })
    console.log(this.requests)
  }

  Accept(studentId?:string, courseId?:string, requestId?:string) {
    let courseArray = []
    courseArray.push(courseId)
let course = {"courses":courseArray}
    this.studentsService.AddCourse(studentId || "", course).subscribe(result => {
      console.log(result);
      this.Reject(requestId);
    })
  }

  Reject(id?:string) {
    this.requestServ.DeletesingRequest(id || "").subscribe(result => { //delete requests from requests table
      this.requests = this.requests.filter(function (obj) {
        return obj.Id != id;
      })
    });
  }
}
