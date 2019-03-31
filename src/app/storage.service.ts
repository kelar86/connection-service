import { ClientCall } from './models/client-call.model';
import { Package } from './models/package.models';
import { Service } from './models/service.models';
import { Offer } from './models/offer.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public offers: Offer[];
  public services: Service[];
  public packages: Package[];

  public clientCalls: ClientCall[];

  constructor() {
    this.clientCalls = [];
  
    this.services = [
      new Service('Мобильная связь', 100),
      new Service('Интернет', 150),
      new Service('Телефон', 100)
    ];

    this.packages = [
      new Package('Все включено', this.services, 0.15),
      new Package('Интернет + Мобильный', this.services.slice(0, 2), 0.10),
      new Package('Пакет гигабайт', [this.services[1]], 0.05)
    ]

    this.offers = [
      new Offer('Выгодный', [], [this.packages[0]]),
      new Offer('Индивидуальный', [], [this.packages[1]]),
      new Offer('Молодежный', [], [this.packages[2]])
    ]

   }

   getOffers() {
     return this.offers;
   }

   saveCall(clientCall) {
      this.clientCalls.push(clientCall);
   }


}
