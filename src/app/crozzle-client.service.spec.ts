import { TestBed } from '@angular/core/testing';

import { CrozzleClientService } from './crozzle-client.service';

describe('CrozzleClientService', () => {
  let service: CrozzleClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrozzleClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
