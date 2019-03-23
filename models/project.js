const projectSeeds = require("./scripts/projectSeeds");

module.exports = function(sequelize, DataTypes) {
  //Define the project table
  var Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo_url: DataTypes.TEXT,
    total_hours: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    location: DataTypes.STRING
  });
//TODO: this is incomplete - benefactor, user, and category need to be created first
  //Associate the projects with benefactor 
  Project.associate = function (models){
    Project.belongsTo(models.benefactor, {
      foreignKey: {
        allowNull: false
      }
    });

    //Insert the task seed data
    Task.sync().then(() => {
      Task.bulkCreate(taskSeeds, {
        ignoreDuplicates: true
      });
    });
  };

  return Task;
};
