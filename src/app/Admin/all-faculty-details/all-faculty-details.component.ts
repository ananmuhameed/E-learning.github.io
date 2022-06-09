import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyDetails } from 'src/app/main-classes/faculty-details';
import { FacultiesService } from '../../Services/faculties.service';

@Component({
  selector: 'app-all-faculty-details',
  templateUrl: './all-faculty-details.component.html',
  styleUrls: ['./all-faculty-details.component.css']
})
export class AllFacultyDetailsComponent implements OnInit {
  _faculties: FacultyDetails[ ] = [];
  // faculties: FacultyDetails[ ] = [];

// private router ?
  constructor(private _facultieservice: FacultiesService, private router: Router) { }

  ngOnInit() {
    //Arrow Function lambda expression
 

  // this.faculties = [
   
  //    {facultyName:"Alsun",studentsNum: 2200, dateFounded : '1983/03/4' ,courseNum : 34,successRate: 90 ,
  //    dean:"Dr. Rawan Sedki",teachingAssistantNum: 132, profNum: 70, address: "Egypt,Cairo"},

  //    {facultyName: "Applied Arts",studentsNum:  870, dateFounded : '1967/08/25' ,courseNum : 20,successRate: 50,
  //    dean: "Dr. Mahmoud Amr",teachingAssistantNum:  144, profNum: 100, address: "Egypt,Cairo"},
    
  //    {facultyName:  "Science",studentsNum:  875, dateFounded : '1967/06/25' ,courseNum : 40,successRate: 75,
  //    dean: "Dr. Alaa Nagy",teachingAssistantNum:  146, profNum: 130, address: "Egypt,Cairo"},

  // ]
  // this.faculties.forEach( faculty => {
  //   this._facultieservice.insertFacultyDetails(faculty);
  // });


     

    this._facultieservice.getFacultyDetails().subscribe(result => {

      Object.keys(result).forEach((key) => {
        result[key]["id"] = key; // to add key (id)

        this._faculties.push(result[key]);
       // console.log(result[key]);
      });
    })

  }



  onSelect(facultyname: String) {

    // this.router.navigate('/MoreDetails', MoreDetails.facultyname)
  }

}
