import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protheusGuard } from './protheus.guard';

describe('protheusGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protheusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
