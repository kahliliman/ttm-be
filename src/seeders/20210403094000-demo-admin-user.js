'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminUser', [
      {
      id: "1b76f601-5f19-423e-a747-1d103ff6ee6b",
      email: "abc@gmail.com",
      firebase_id: "123456789",
      created_at: '2021-01-25 09:00:00.000+07',
      updated_at: '2021-01-27 09:00:00.000+07',
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminUser', null, {});

  }
};
