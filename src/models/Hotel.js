const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { HotelRate, AdminUser } = models;
      Hotel.belongsTo(AdminUser, { foreignKey: "created_by" });

      Hotel.hasMany(HotelRate, { foreignKey: "id" });
    }
  }
  Hotel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      logo_img: DataTypes.STRING,
      location: DataTypes.STRING,
      created_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );
  return Hotel;
};
