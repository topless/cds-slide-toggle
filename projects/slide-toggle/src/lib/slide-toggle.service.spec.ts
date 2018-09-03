import { TestBed, inject } from '@angular/core/testing';

import { SlideToggleService } from './slide-toggle.service';

describe('SlideToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideToggleService]
    });
  });

  it('should be created', inject([SlideToggleService], (service: SlideToggleService) => {
    expect(service).toBeTruthy();
  }));
});
