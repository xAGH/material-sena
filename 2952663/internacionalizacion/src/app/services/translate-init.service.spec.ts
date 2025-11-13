import { TestBed } from '@angular/core/testing';

import { TranslateInitService } from './translate-init.service';

describe('TranslateInitService', () => {
  let service: TranslateInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
