const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class HotelRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { HotelBooking, Hotel, AdminUser } = models;

      HotelRate.hasMany(HotelBooking, { foreignKey: "id" });

      HotelRate.belongsTo(AdminUser, { foreignKey: "created_by" });
      HotelRate.belongsTo(Hotel, { foreignKey: "hotel_id" });
    }
  }
  HotelRate.init(
    {
      id: DataTypes.UUIDV4,
      hotel_id: DataTypes.UUIDV4,
      rate_name: DataTypes.STRING,
      price_per_night: DataTypes.NUMBER,
      created_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "HotelRate",
    }
  );
  return HotelRate;
};
