import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodreliefComponent } from './floodrelief.component';

describe('FloodreliefComponent', () => {
  let component: FloodreliefComponent;
  let fixture: ComponentFixture<FloodreliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodreliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodreliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
