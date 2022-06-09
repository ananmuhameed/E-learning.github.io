import { Component, OnInit } from '@angular/core';
import { FacultyDetails } from '../main-classes/faculty-details';
import { FacultiesService } from '../Services/faculties.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomepageComponent implements OnInit {

  

  constructor(private facultyDetailsService:FacultiesService){}
  ngOnInit(): void {
    //   let faculty1 : FacultyDetails = { "address": "Abbasiya",
    //     "courseNum": 200,
    //     "dateFounded": "1/1/1994",
    //     "dean": "Dr. Nagwa Badr",
    //     "facultyName": "Computer Science",
    //     "profNum": 100,
    //     "studentsNum": 5000,
    //     "successRate": 20,
    //     "teachingAssistantNum": 300
    //   };
    //   let faculty2 : FacultyDetails = { 
      
    //     "address": "Abbasiya",
    //     "courseNum": 100,
    //     "dateFounded": "2/1/2000",
    //     "dean": "Dr. Khalid",
    //     "facultyName": "Commerce",
    //     "profNum": 200,
    //     "studentsNum": 4000,
    //     "successRate": 80,
    //     "teachingAssistantNum": 500
    //   };
    // this.facultyDetailsService.insertFacultyDetails(faculty1).subscribe((data: any) => {
    //   faculty1.id = data;
    // });
    // this.facultyDetailsService.insertFacultyDetails(faculty2).subscribe((data: any) => {
    //   faculty2.id = data;
    // });
    // this.facultyDetailsService.getFacultyDetails().subscribe(data => {console.log(data);})
    }
    
  
    

}
