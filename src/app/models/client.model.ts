import { Deserializable } from './deserializable.model';

export class Client implements Deserializable {
    city: string;
    name: string;
    adress: string;
    phoneNumber: string;
    extraPhoneNumber: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}