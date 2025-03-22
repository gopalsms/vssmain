import { TestBed } from '@angular/core/testing';

import { BlooddonorsinfoService } from './blooddonorsinfo.service';

describe('BlooddonorsinfoService', () => {
  let service: BlooddonorsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlooddonorsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
