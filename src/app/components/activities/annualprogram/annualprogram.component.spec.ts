import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualprogramComponent } from './annualprogram.component';

describe('AnnualprogramComponent', () => {
  let component: AnnualprogramComponent;
  let fixture: ComponentFixture<AnnualprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
