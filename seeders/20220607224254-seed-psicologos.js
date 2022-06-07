'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('psicologos', [
       {
       name: 'Nome1',
       email: 'nome1@email.com',
       senha: 'senha123',
       apresentacao: 'Uma apresentação',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nome1',
      email: 'nome1@email.com',
      senha: 'senha123',
      apresentacao: 'Uma apresentação',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('psicologos', null, {});
  }
};
