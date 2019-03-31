import { ClientCall } from './../../models/client-call.model';
import { StorageService } from './../../storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  template: `
    <ul class="list">
    <li *ngFor="let call of clientCalls"> 
      <p>tel:{{call.client.phoneNumber}}  Name: {{call.client.name}}</p>
    </li>
  `,
  styles: []
})
export class OrderListComponent implements OnInit {

  clientCalls: ClientCall[];
  constructor(private storage: StorageService) {  }

  ngOnInit() {
    this.clientCalls = this.storage.clientCalls;
  }

}
