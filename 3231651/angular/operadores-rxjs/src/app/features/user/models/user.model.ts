export interface Address {
  street: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  companyName: string;
  postsQuantity: number;
}
