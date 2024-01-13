'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init({
    flightNumber: DataTypes.STRING,
    airplaneId: DataTypes.INTEGER,
    departureAirportId: DataTypes.INTEGER,
    arrivalAirportId: DataTypes.INTEGER,
    arrivalTime: DataTypes.DATE,
    departureTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    boardingGate: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};