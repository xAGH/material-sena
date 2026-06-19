export interface GeoCoordinates {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCoordinates;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserReq {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
