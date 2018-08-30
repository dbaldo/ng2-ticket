import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { TicketService } from '../../../core/tickets/tickets.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  
  public tickets: any[];

  constructor(
      private _ticketService: TicketService,
      private _toasterService: ToasterService) {
  }

  ngOnInit() {
    
    this._ticketService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.tickets = data,
      error => () => {
          this._toasterService.pop('error', 'Damn', 'Something went wrong...');
      });

  }

}
