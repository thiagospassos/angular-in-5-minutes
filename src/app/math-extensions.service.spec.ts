import { TestBed, inject } from '@angular/core/testing';

import { MathExtensionsService } from './math-extensions.service';

describe('MathExtensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathExtensionsService]
    });
  });

  it('should be created', inject([MathExtensionsService], (service: MathExtensionsService) => {
    expect(service).toBeTruthy();
  }));
});
