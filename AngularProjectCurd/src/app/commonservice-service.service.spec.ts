import { TestBed } from '@angular/core/testing';

import { CommonserviceServiceService } from './commonservice-service.service';

describe('CommonserviceServiceService', () => {
  let service: CommonserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
