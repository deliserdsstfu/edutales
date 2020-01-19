import { TestBed } from '@angular/core/testing';

import { TaleService } from './tale.service';

describe('TaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaleService = TestBed.get(TaleService);
    expect(service).toBeTruthy();
  });
});
