import { faker } from '@faker-js/faker';
import { MarkAble } from './CustomMap';

export class User implements MarkAble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markAbleContent(): string {
    const { name } = this;
    return `The user ${name.toUpperCase()} is Located here`;
  }
}
