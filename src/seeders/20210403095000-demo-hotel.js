'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotel', [
      {
      id: "183f607f-3ebd-4fe6-9d10-bcfdd08d8140",
      name: "Aston",
      logo_img: "https://cdn0.astonhotelsinternational.com/v3/assets/images/brand_logo/aston-logo-color.png",
      location: "Bogor",
      created_by: "1b76f601-5f19-423e-a747-1d103ff6ee6b",
      created_at: '2021-01-25 09:00:00.000+07',
      updated_at: '2021-01-27 09:00:00.000+07',
    },
      {
      id: "831cb32c-995b-4921-a4ed-a21639e1e3ff",
      name: "Novotel",
      logo_img: "https://seekvectorlogo.com/wp-content/uploads/2018/01/novotel-vector-logo.png",
      location: "Bandung",
      created_by: "1b76f601-5f19-423e-a747-1d103ff6ee6b",
      created_at: '2021-01-29 09:00:00.000+07',
      updated_at: '2021-01-30 09:00:00.000+07',
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotel', null, {});
  }
};
