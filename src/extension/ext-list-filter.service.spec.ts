/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtListFilterService } from './ext-list-filter.service';

describe('Service: ExtListFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtListFilterService]
    });
  });

  it('should ...', inject([ExtListFilterService], (service: ExtListFilterService) => {
    expect(service).toBeTruthy();
  }));
});
