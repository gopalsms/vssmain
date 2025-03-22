import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamidhayanComponent } from './samidhayan.component';

describe('SamidhayanComponent', () => {
  let component: SamidhayanComponent;
  let fixture: ComponentFixture<SamidhayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamidhayanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamidhayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
