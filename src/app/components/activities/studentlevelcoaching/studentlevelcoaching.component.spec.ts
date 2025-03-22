import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlevelcoachingComponent } from './studentlevelcoaching.component';

describe('StudentlevelcoachingComponent', () => {
  let component: StudentlevelcoachingComponent;
  let fixture: ComponentFixture<StudentlevelcoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentlevelcoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlevelcoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
