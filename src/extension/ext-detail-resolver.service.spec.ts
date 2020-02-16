/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtDetailResolverService } from './ext-detail-resolver.service';

describe('Service: ExtDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtDetailResolverService]
    });
  });

  it('should ...', inject([ExtDetailResolverService], (service: ExtDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
