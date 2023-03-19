import { TestBed } from '@angular/core/testing';

import { HomeCursosService } from './home-cursos.service';

describe('HomeCursosService', () => {
  let service: HomeCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
