import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtservicepreparationcoachingComponent } from './govtservicepreparationcoaching.component';

describe('GovtservicepreparationcoachingComponent', () => {
  let component: GovtservicepreparationcoachingComponent;
  let fixture: ComponentFixture<GovtservicepreparationcoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtservicepreparationcoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtservicepreparationcoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
