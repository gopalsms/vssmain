import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfunctionalitiesComponent } from './testfunctionalities.component';

describe('TestfunctionalitiesComponent', () => {
  let component: TestfunctionalitiesComponent;
  let fixture: ComponentFixture<TestfunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
