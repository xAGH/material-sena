import { TestBed } from '@angular/core/testing';

import { JsonPlaceholder } from './json-placeholder';

describe('JsonPlaceholder', () => {
  let service: JsonPlaceholder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
