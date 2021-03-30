const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AdminUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Hotel, HotelRate } = models;

      AdminUser.hasMany(HotelRate, { foreignKey: "id" });
      AdminUser.hasMany(Hotel, { foreignKey: "id" });
    }
  }
  AdminUser.init(
    {
      id: DataTypes.UUIDV4,
      email: DataTypes.STRING,
      firebase_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AdminUser",
    }
  );
  return AdminUser;
};
