import { Component } from '@angular/core';
import { FacultyDetails } from './main-classes/faculty-details';
import { FacultiesService } from './Services/faculties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
