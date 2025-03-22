import { TestBed } from '@angular/core/testing';

import { RestApiBlooddonationService } from './rest-api-blooddonation.service';

describe('RestApiBlooddonationService', () => {
  let service: RestApiBlooddonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiBlooddonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
