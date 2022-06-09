import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../../Services/faculties.service';
import { ActivatedRoute } from '@angular/router';
import { FacultyDetails } from 'src/app/main-classes/faculty-details';
@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {
  public faculties: FacultyDetails[] = [];
 private id:string="";
  constructor(private _facultyservice: FacultiesService, private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params => { //emsheely 3ala el params elly fel path
      this.id = params['id']; 
      
   });
    this._facultyservice.getSingleFacultyDetails(this.id).subscribe(result => {

      // Object.keys(result).forEach((key) => {
      //   this.faculties.push(result[key]);
      // });
      this.faculties.push(result);
     //  console.log(this.faculties);
   
    })
    
  }

}
