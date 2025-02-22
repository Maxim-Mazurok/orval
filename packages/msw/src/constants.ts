import { SchemaObject } from 'openapi3-ts';

export const DEFAULT_FORMAT_MOCK: Record<
  Required<SchemaObject>['format'],
  string
> = {
  bic: 'faker.finance.bic()',
  city: 'faker.address.city()',
  country: 'faker.address.country()',
  date: "faker.date.past().toISOString().split('T')[0]",
  'date-time': "`${faker.date.past().toISOString().split('.')[0]}Z`",
  email: 'faker.internet.email()',
  firstName: 'faker.name.firstName()',
  gender: 'faker.name.gender()',
  iban: 'faker.finance.iban()',
  ipv4: 'faker.internet.ipv4()',
  ipv6: 'faker.internet.ipv6()',
  jobTitle: 'faker.name.jobTitle()',
  lastName: 'faker.name.lastName()',
  password: 'faker.internet.password()',
  phoneNumber: 'faker.phone.phoneNumber()',
  streetName: 'faker.address.streetName()',
  uri: 'faker.internet.url()',
  url: 'faker.internet.url()',
  userName: 'faker.internet.userName()',
  uuid: 'faker.datatype.uuid()',
  zipCode: 'faker.address.zipCode()',
};
