
module.exports = function(sequelize, DataTypes){
  //Define the book table
  const UserProject = sequelize.define("User_Project", {
    project_id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    user_hours_pledged: DataTypes.INTEGER,
    });

  return UserProject;
}
