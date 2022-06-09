import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './home-page/home-page.component';
import { AllFacultyDetailsComponent } from './Admin/all-faculty-details/all-faculty-details.component';
import { AllStudentsDetailsComponent } from './Admin/all-students-details/all-students-details.component';
import { NewCourseComponent } from './Admin/new-course/new-course.component';
import { AvailableCoursesComponent } from './Student/available-courses/available-courses.component';
import { CurrentCoursesComponent } from './Student/current-courses/current-courses.component';
import { GradesComponent } from './Student/grades/grades.component';
import { ProfileComponent } from './Student/profile/profile.component';
import { PaymentHistoryComponent } from './Student/payment-history/payment-history.component';
import { PendingPaymentsComponent } from './Student/pending-payments/pending-payments.component';
import { RequestsComponent } from './Admin/requests/requests.component';
import { FacultyDetailsComponent } from './Admin/faculty-details/faculty-details.component';
import { StudentDetails } from './main-classes/student-details';
import { StudentDetailsComponent } from './Admin/student-details/student-details.component';
import { HomepagestudentComponent } from './Student/home-page-student/home-page-student.component';
import { AllCoursesComponent } from './Faculty/all-courses/all-courses.component';


const routes: Routes = [
  //{ path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'new-course', component: NewCourseComponent },
  { path: 'all-student-details', component: AllStudentsDetailsComponent },
  { path: 'all-faculties-details', component: AllFacultyDetailsComponent}, 
    { path: 'faculty-details/:id', component: FacultyDetailsComponent },
    {path: 'student-details/:Id', component:StudentDetailsComponent },
{path: 'home-page-student', component: HomepagestudentComponent},
{path: 'all-courses', component:AllCoursesComponent},

  
  { path: 'requests', component: RequestsComponent },
 
  { path: 'login', component: LoginComponent, pathMatch: 'full' },


  {
    path: 'courses', children: [
      { path: '', component: CurrentCoursesComponent },
      { path: '', component: AvailableCoursesComponent },

    ]
  },
  { path: 'grades', component: GradesComponent },
  { path: 'paymenthistory', component: PaymentHistoryComponent },
  { path: 'pendingpayments', component: PendingPaymentsComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'login', component: LoginComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewCourseComponent, AllStudentsDetailsComponent, AllFacultyDetailsComponent, RequestsComponent]
