'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model {

  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please input email`
        },
        notEmpty: {
          msg: `Please input email`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please input email`
        },
        isEmail: {
          args: true,
          msg: `Please input right email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please input password`
        },
        len: {
          args: [5, 15],
          msg: `Password min 5 and max 15 characters`
        }
      }
    },
    gender: DataTypes.STRING
  }, {
    sequelize
  });
  User.beforeCreate((instance, options) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(instance.password, salt);
    instance.password = hash;
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Booking);
  };
  return User;
};