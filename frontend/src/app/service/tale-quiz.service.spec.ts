import { TestBed } from '@angular/core/testing';

import { TaleQuizService } from './tale-quiz.service';

describe('TaleQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaleQuizService = TestBed.get(TaleQuizService);
    expect(service).toBeTruthy();
  });
});
