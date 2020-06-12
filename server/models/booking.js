'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Booking extends Model {

  }
  Booking.init({
    restaurant_name: DataTypes.STRING,
    restaurant_address: DataTypes.STRING,
    date: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Booking.beforeCreate((instance, options) => {
    const dateWrapper = new Date(instance.date);
    if (isNaN(dateWrapper.getDate())){
      instance.date = new Date();
    } else {
      instance.date = dateWrapper;
    }
  
  });
  Booking.associate = function(models) {
    Booking.belongsTo(models.User);
  };
  return Booking;
};