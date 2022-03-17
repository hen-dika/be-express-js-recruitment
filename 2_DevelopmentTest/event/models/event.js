'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    eventId: DataTypes.STRING,
    eventName: DataTypes.STRING,
    eventLocation: DataTypes.STRING,
    eventImage: DataTypes.STRING,
    eventStartDate: DataTypes.DATE,
    eventEndDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  Event.removeAttribute('id');

  return Event;
};