import { RequestsComponent } from './Admin/requests/requests.component';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { StudentHeaderComponent } from './Student/student-header/student-header.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './home-page/home-page.component';
import { FacultiesService } from './Services/faculties.service';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AllFacultyDetailsComponent } from './Admin/all-faculty-details/all-faculty-details.component';
import { AllStudentsDetailsComponent } from './Admin/all-students-details/all-students-details.component';
import { FacultyDetailsComponent } from './Admin/faculty-details/faculty-details.component';
import { NewCourseComponent } from './Admin/new-course/new-course.component';
import { StudentDetailsComponent } from './Admin/student-details/student-details.component';
import { AvailableCoursesComponent } from './Student/available-courses/available-courses.component';
import { CoursepageComponent } from './Student/course-page/course-page.component';
import { CurrentCoursesComponent } from './Student/current-courses/current-courses.component';
import { GradesComponent } from './Student/grades/grades.component';
import { ProfileComponent } from './Student/profile/profile.component';
import { HomepagestudentComponent } from './Student/home-page-student/home-page-student.component';
import { PaymentHistoryComponent } from './Student/payment-history/payment-history.component';
import { PendingPaymentsComponent } from './Student/pending-payments/pending-payments.component';
import { AllCoursesComponent } from './Faculty/all-courses/all-courses.component';
import { CourseMaterialsComponent } from './Faculty/course-materials/course-materials.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { StudentsService } from './Services/students.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginService } from './Services/login.service';
import { LoginDetails } from './main-classes/login-details';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AllFacultyDetailsComponent,
    ProfileComponent,
    HomepageComponent,
    HomepagestudentComponent,
    CoursepageComponent,
    AllStudentsDetailsComponent,
    FacultyDetailsComponent,
    StudentDetailsComponent,
    AdminHeaderComponent,
    AvailableCoursesComponent,
    CourseMaterialsComponent,
    CurrentCoursesComponent,
    GradesComponent,
    PaymentHistoryComponent,
    PendingPaymentsComponent,
    NewCourseComponent,
    AllCoursesComponent,
    StudentHeaderComponent,
    RequestsComponent,
    LoginComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB8x_fD6eWFaH5iGEjhsJ5OON2keEMvj64",
      authDomain: "donia-db.firebaseapp.com",
      databaseURL: "https://donia-db-default-rtdb.firebaseio.com",
      projectId: "donia-db",
      storageBucket: "donia-db.appspot.com",
      messagingSenderId: "889999620051",
      appId: "1:889999620051:web:743c96e9dce328daa2a126"
    }),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    
  ],
  providers: [FacultiesService, StudentsService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
