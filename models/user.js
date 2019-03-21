
module.exports = function(sequelize, DataTypes){
  //Define the book table
  const User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    facebook_id: DataTypes.INTEGER,
    hours_pledged: DataTypes.INTEGER,
    });

  return User;
}
