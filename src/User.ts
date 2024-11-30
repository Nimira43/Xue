import { faker} from '@faker-js/faker'

export class User {
  name: string;
  placeLocation: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.person.firstName()
    this.placeLocation = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}




