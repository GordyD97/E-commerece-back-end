const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      auttoIncrement: true,
    },
    Product_id: {
      type: DataTypes.INTEGER,
      // refrence to the product model id?
    },
    tagid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
      // refrence to the tag models id?
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
