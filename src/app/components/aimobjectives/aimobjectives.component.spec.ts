import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimobjectivesComponent } from './aimobjectives.component';

describe('AimobjectivesComponent', () => {
  let component: AimobjectivesComponent;
  let fixture: ComponentFixture<AimobjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimobjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AimobjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
