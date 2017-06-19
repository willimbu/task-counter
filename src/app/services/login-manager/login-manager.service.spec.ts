import { TestBed, inject } from '@angular/core/testing';

import { LoginManagerService } from './login-manager.service';

describe('LoginManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginManagerService]
    });
  });

  it('should be created', inject([LoginManagerService], (service: LoginManagerService) => {
    expect(service).toBeTruthy();
  }));
});
