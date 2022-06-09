import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsDetailsComponent } from './all-students-details.component';

describe('AllStudentsDetailsComponent', () => {
  let component: AllStudentsDetailsComponent;
  let fixture: ComponentFixture<AllStudentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
