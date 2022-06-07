'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('pacientes', [
       {
       nome: 'Nome1',
       email: 'nome1@email.com',
       idade: new Date(),
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Nome1',
      email: 'nome1@email.com',
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('pacientes', null, {});
  }
};