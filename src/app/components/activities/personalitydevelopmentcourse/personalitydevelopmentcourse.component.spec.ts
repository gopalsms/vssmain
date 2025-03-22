import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitydevelopmentcourseComponent } from './personalitydevelopmentcourse.component';

describe('PersonalitydevelopmentcourseComponent', () => {
  let component: PersonalitydevelopmentcourseComponent;
  let fixture: ComponentFixture<PersonalitydevelopmentcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitydevelopmentcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitydevelopmentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
