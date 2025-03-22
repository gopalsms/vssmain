import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiogalleryComponent } from './audiogallery.component';

describe('AudiogalleryComponent', () => {
  let component: AudiogalleryComponent;
  let fixture: ComponentFixture<AudiogalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiogalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiogalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
