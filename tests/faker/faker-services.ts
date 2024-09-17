import { pt_BR, Faker } from '@faker-js/faker';
import { Client } from "../../src/domain/entities/Client";

const customFaker = new Faker({
    locale: [pt_BR],
});

export const generateClient = (): void => {
    console.log(customFaker.person.fullName());
}