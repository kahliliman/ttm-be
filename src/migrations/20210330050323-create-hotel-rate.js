module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HotelRate", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      hotel_id: {
        type: Sequelize.UUID,
        references: {
          model: "Hotel",
          key: "id",
        },
      },
      rate_name: {
        type: Sequelize.STRING,
      },
      price_per_night: {
        type: Sequelize.INTEGER,
      },
      created_by: {
        type: Sequelize.UUID,
        references: {
          model: "AdminUser",
          key: "id",
        },
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
    await queryInterface.dropTable("HotelRate");
  },
};
