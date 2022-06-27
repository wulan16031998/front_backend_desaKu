'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class warga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.warga.hasMany(models.keuangan, {
        foreignKey:"warga_id"
      })
    }
  }
  warga.init({
    nama: DataTypes.STRING,
    nikk: DataTypes.INTEGER,
    alamatKtp: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    jenisKelamin: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: {
      type: DataTypes.STRING,
      defaultValue:'warga'
    }
  }, {
    sequelize,
    modelName: 'warga',
  });
  return warga;
};