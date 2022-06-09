import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
import { LoginDetails } from '../main-classes/login-details';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { StudentsService } from '../Services/students.service';
import { StudentDetails } from '../main-classes/student-details';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any=FormGroup;
  student!:StudentDetails;
  users!:LoginDetails[];

  constructor(private gp : FormBuilder , private loginserv:LoginService , private router: Router, private studentService: StudentsService) {

    // console.log("hello");
   }


  
  ngOnInit(): void {

    this.login=this.gp.group({
      name:['',Validators.required],
      pass:['',Validators.minLength(6)]
    })

    this.loginserv.getUser().subscribe((data:any)=>{
      console.log(data);
        this.users=data;   
    })
  }

  

  loginSubmit(data:any){    
    if(data.name){
 
      for (const value of Object.values(this.users)) {
        if(value.UserName === data.name && value.Password===data.pass && value.role === 'admin'){
          this.router.navigate(['/all-faculties-details']);
          
          break;
        }
        else if(value.UserName === data.name && value.Password===data.pass && value.role === 'student')
        {

          this.studentService.getSingleStudentDetails(value.userId).subscribe(result  => {
            this.student = result;
            this.student.Id = value.userId;
            localStorage.setItem("student", JSON.stringify(result));
            this.router.navigate(['/home-page-student']);

          });
          break;
        }
        else if(value.UserName === data.name && value.Password===data.pass && value.role === 'faculty')
        {
          this.router.navigate(['/all-courses']);
          break;
        }
        else{
          console.log("invalid user");
          // alert("Invalid user Name or Password, please try again!");
        }
      }

    }
  }
}
