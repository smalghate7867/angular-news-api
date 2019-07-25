import { TestBed } from '@angular/core/testing';

import { ShowNewsService } from './show-news.service';

describe('ShowNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowNewsService = TestBed.get(ShowNewsService);
    expect(service).toBeTruthy();
  });
});
