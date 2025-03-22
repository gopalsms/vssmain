import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthdaycelebrationComponent } from './youthdaycelebration.component';

describe('YouthdaycelebrationComponent', () => {
  let component: YouthdaycelebrationComponent;
  let fixture: ComponentFixture<YouthdaycelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthdaycelebrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthdaycelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
