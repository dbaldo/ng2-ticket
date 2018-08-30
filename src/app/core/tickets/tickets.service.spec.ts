/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicketService } from './tickets.service';

describe('Service: Menu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketService]
    });
  });

  it('should ...', inject([TicketService], (service: TicketService) => {
    expect(service).toBeTruthy();
  }));
});
