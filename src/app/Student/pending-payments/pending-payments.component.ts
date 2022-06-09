import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css']
})
export class PendingPaymentsComponent implements OnInit {
 
  showpending:boolean=false
  showmethod:boolean=false
  showcard:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  pendingbutton(){
    this.showpending=!this.showpending
  }
  methodbutton(){
    this.showmethod=!this.showmethod
  }
  paybutton(){
    this.showcard=!this.showcard
  }
}
