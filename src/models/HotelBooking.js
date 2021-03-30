const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class HotelBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { User, HotelRate } = models;

      HotelBooking.belongsTo(User, { foreignKey: "user_id" });
      HotelBooking.belongsTo(HotelRate, { foreignKey: "rate_id" });
    }
  }
  HotelBooking.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      check_in_date: DataTypes.DATE,
      check_out_date: DataTypes.DATE,
      night_duration: DataTypes.NUMBER,
      user_id: DataTypes.UUIDV4,
      category: DataTypes.STRING,
      rate_id: DataTypes.UUIDV4,
      total_price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "HotelBooking",
    }
  );
  return HotelBooking;
};
