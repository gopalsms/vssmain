import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycircleComponent } from './studycircle.component';

describe('StudycircleComponent', () => {
  let component: StudycircleComponent;
  let fixture: ComponentFixture<StudycircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudycircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
