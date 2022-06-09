import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, GetDownloadURLPipe} from '@angular/fire/compat/storage';
import { NewCourseService } from 'src/app/Services/new-course.service';
import { AddCourses } from 'src/app/main-classes/addCourses';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl  } from '@angular/platform-browser';
import { FacultiesService } from 'src/app/Services/faculties.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyDetails } from 'src/app/main-classes/faculty-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  clicked = false;
  path = '';
  src :SafeUrl = "";
  downloadURL!: Observable<string>;
  faculties: FacultyDetails[] = [];
  public course: AddCourses = {
    courseCode:"",
    courseName:"",
    creditHours: 0,
    facultiesAssigned:"Applied Arts",
    prerequisiteCourses:"",
    whyCourse:"", 
    imagePath:""
  };

  constructor (private facultiesService: FacultiesService,private newCourseService: NewCourseService,private af: AngularFireStorage,
              private http: HttpClient, private sanitizer: DomSanitizer, private router:Router) {}

   upload($event:any){
     this.clicked= true;
     this.path = $event.target.files[0];
     this.src =  this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL($event.target.files[0])); // security for angular
     }
   file= "/files"+Math.random()+this.path; //X upload for same file

   uploadImage(){ 
      this.af.upload(this.file,this.path);
  }
  ngOnInit(): void {
   this.facultiesService.getFacultyDetails().subscribe(result => {
     Object.keys(result).forEach((key) => {
       this.faculties.push(result[key]);
     });
     console.log(this.faculties)
   })
}

onClick(){
  this.uploadImage();
  this.course.imagePath = this.file; //save in database path 
  this.newCourseService.insertCourse(this.course as AddCourses).subscribe(result => {
    alert("Course Has been Added Sucessefully");
    this.router.navigate(["/all-faculties-details"]);
  });
  }

}

