const faker = require("faker");

const generateUser = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
    });
  }
  return data;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(generateUser());
    });
};
