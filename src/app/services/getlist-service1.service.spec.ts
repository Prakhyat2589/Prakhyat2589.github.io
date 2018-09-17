import { TestBed, inject } from '@angular/core/testing';

import { GetList1 } from './getlist-service1.service';

describe('GetlistService1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetList1]
    });
  });

  it('should be created', inject([GetList1], (service: GetList1) => {
    expect(service).toBeTruthy();
  }));
});
