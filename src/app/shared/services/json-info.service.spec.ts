import { TestBed } from '@angular/core/testing';

import { JsonInfoService } from './json-info.service';

describe('JsonInfoService', () => {
  let service: JsonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
