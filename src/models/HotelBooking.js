const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class HotelBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelBooking.init(
    {
      id: DataTypes.UUIDV4,
      check_in_date: DataTypes.DATE,
      check_out_date: DataTypes.DATE,
      night_duration: DataTypes.NUMBER,
      user_id: DataTypes.UUIDV4,
      category: DataTypes.STRING,
      rate_id: DataTypes.STRING,
      total_price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "HotelBooking",
    }
  );
  return HotelBooking;
};
