import { Component, OnInit } from '@angular/core';
import { AddCourses } from 'src/app/main-classes/addCourses';
import { RequestDetails } from 'src/app/main-classes/request-details';
import { StudentDetails } from 'src/app/main-classes/student-details';
import { NewCourseService } from 'src/app/Services/new-course.service';
import { RequestService } from 'src/app/Services/request.service';

@Component({
  selector: 'app-current-courses',
  templateUrl: './current-courses.component.html',
  styleUrls: ['./current-courses.component.css']
})
export class CurrentCoursesComponent implements OnInit {

  courses:AddCourses[] = [];
  public rd?:RequestDetails;
  student:StudentDetails = <StudentDetails><unknown>(JSON.parse(localStorage.getItem("student") || '{}'));
  facultyName?:string = this.student.faculty;
  constructor(private courseService: NewCourseService, private requestService: RequestService ) { }

  ngOnInit(): void {
    this.courseService.getAvailableCourses(this.facultyName || "").subscribe(result => {
      Object.keys(result).forEach((key) => {
        result[key]["coursePrimaryKey"] = key; // to add key (id)
        this.courses.push(result[key]);
       // console.log(result[key]); 
      });
    });
  }

  Enroll( courseId?:string, studentName?:string, courseName?:string, coursePrimary?:string) {
    this.rd = {studentName: studentName, courseId:courseId, courseName:courseName, 
      coursePrimaryKey:coursePrimary, studentPrimaryKey:this.student.Id};
      
    
    this.requestService.addRequest(this.rd).subscribe(result => {
      this.courses = this.courses.filter(function(obj) {
        return obj.coursePrimaryKey != coursePrimary;
      })
  })
  }

}
