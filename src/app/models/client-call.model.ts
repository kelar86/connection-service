import { Offer } from './offer.models';

import { Deserializable } from './deserializable.model';
import { Client } from "./client.model";

export class ClientCall implements Deserializable {
    client: Client;
    callReason: string;
    callReasonComment: string;
    offer: Offer;
    cancelReason: string;
    cancelReasonComment: string;
    

    deserialize(input: any) {
        Object.assign(this, input);
        this.client = new Client().deserialize(input.client);
        this.offer = new Offer('',[],[]).deserialize(input.offer);
        return this;
    }
}