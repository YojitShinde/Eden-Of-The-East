import { TestBed } from '@angular/core/testing';

import { WebSearchService } from './web-search.service';

describe('WebSearchService', () => {
  let service: WebSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
