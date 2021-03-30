const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init(
    {
      id: DataTypes.UUIDV4,
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
