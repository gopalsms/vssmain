import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonorsinfotestComponent } from './blooddonorsinfotest.component';

describe('BlooddonorsinfotestComponent', () => {
  let component: BlooddonorsinfotestComponent;
  let fixture: ComponentFixture<BlooddonorsinfotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonorsinfotestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonorsinfotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
