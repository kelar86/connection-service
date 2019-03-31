import { Package } from './package.models';
import { Service } from './service.models';
import { Deserializable } from './deserializable.model';

export class Offer  implements Deserializable {
    tariffPlan: string;
    services: Service[];
    packages: Package[];

    constructor(tariffPlan, services, packages ) {
        this.tariffPlan = tariffPlan;
        this.services = services;
        this.packages = packages;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    price() {
        return this.totalPackagePrice() + this.totalServicePrice();
    }

    totalServicePrice() {
        return this.services.reduce((acc, item) => acc + item.price, 0);
    }

    totalPackagePrice() {
        return this.services.reduce((acc, item) => acc + item.price, 0);
    }
}