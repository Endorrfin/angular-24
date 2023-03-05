export interface ICustomer {
  id?: null;
  name: string;
  phone: string;
  address: string;
  membership: cardMembership;
}


enum cardMembership {
  Basic = 'Basic',
  Pro = 'Pro',
  Platinum = 'Platinum'
}