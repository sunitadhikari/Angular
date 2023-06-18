import { TestBed } from '@angular/core/testing';

import { UserResorverService } from './user-resorver.service';

describe('UserResorverService', () => {
  let service: UserResorverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResorverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
