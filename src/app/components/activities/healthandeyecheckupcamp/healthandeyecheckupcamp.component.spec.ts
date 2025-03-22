import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthandeyecheckupcampComponent } from './healthandeyecheckupcamp.component';

describe('HealthandeyecheckupcampComponent', () => {
  let component: HealthandeyecheckupcampComponent;
  let fixture: ComponentFixture<HealthandeyecheckupcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthandeyecheckupcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthandeyecheckupcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
