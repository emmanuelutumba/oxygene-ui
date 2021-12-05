import { TestBed } from '@angular/core/testing';

import { OxygeneUiService } from './oxygene-ui.service';

describe('OxygeneUiService', () => {
  let service: OxygeneUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxygeneUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
