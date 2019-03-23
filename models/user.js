const userSeeds = require("./scripts/userSeeds");

module.exports = function (sequelize, DataTypes) {
  //Define the user table
  let User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    facebook_id: DataTypes.TEXT
  });

  User.associate = function (models) {
    // Associating user with user_projects
    User.hasMany(models.UserProject, {
        onDelete: "cascade"
    });
  };

  //Insert user seed data
  User.sync().then(() => {
    User.bulkCreate(userSeeds, {
      ignoreDuplicates: true
    });
  });

  return User;
};

