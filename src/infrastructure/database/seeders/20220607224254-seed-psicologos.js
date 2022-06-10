'use strict';

const { faker } = require('@faker-js/faker');

let seed = [];
for(let i=0; i<10; i++){
  seed.push(
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('psicologos', seed);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('psicologos', null, {});
  }
};
