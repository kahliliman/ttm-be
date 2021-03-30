module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hotels", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
      },
      logo_img: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      created_by: {
        type: Sequelize.UUID,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Hotels");
  },
};
