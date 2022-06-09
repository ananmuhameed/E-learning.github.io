import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/main-classes/student-details';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  student:StudentDetails = <StudentDetails><unknown>(JSON.parse(localStorage.getItem("student") || '{}'));

  constructor(private studService: StudentsService) { }

  ngOnInit(): void {
  
      console.log(this.student);
  }

}
