// cypress/support/factories/registerInformation.js
import { faker } from "@faker-js/faker";

export const registerInformation = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress({ useFullAddress: true }),
  email: faker.internet.email({ provider: "example.com" }),
  phone: faker.phone.number("##########"),
  gender: "Male",
  hobbies: ["Cricket", "Movies"],
  language: "English",
  skill: "Javascript",
  country: "India",
  dob: {
    year: "1996",
    month: "May",
    day: "10",
  },
  password: faker.internet.password({ length: 12, memorable: true }) + "123!",
};
