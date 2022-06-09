import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  showpayments:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  paymentsbutton(){
    this.showpayments=!this.showpayments
  }
}
