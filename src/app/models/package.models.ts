import { Service } from './service.models';

export class Package {
    name: string;
    services: Service[];
    discount: number;

    constructor(name, services, discount){
        this.name = name;
        this.services = services;
        this.discount = discount;
    }

    servicesPrice(){
        return this.services.reduce((acc, item) => acc + item.price, 0);
    }
    
    price() {
        return this.servicesPrice() - this.servicesPrice() * this.discount;
    }
}