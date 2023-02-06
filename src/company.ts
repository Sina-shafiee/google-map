import { faker } from '@faker-js/faker';
import { MarkAble } from './CustomMap';

export class Company implements MarkAble {
  name: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markAbleContent(): string {
    const { name } = this;
    return `The company ${name.toUpperCase()} is Located here`;
  }
}
