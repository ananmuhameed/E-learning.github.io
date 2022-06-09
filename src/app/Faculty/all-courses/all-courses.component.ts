import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  showds:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  hoverds(){
    this.showds=!this.showds
  }
}
