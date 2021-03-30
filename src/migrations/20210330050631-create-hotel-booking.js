module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HotelBookings", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      check_in_date: {
        type: Sequelize.DATE,
      },
      check_out_date: {
        type: Sequelize.DATE,
      },
      night_duration: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
      },
      category: {
        type: Sequelize.STRING,
      },
      rate_id: {
        type: Sequelize.STRING,
      },
      total_price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("HotelBookings");
  },
};
