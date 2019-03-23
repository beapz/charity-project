const projectSeeds = require("./scripts/projectSeeds");

module.exports = function (sequelize, DataTypes) {
  //Define the project table
  var Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo_url: DataTypes.TEXT,
    total_hours: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    location: DataTypes.STRING
  });

  //Associate the projects with benefactor 
  Project.associate = function (models) {
    Project.belongsTo(models.Benefactor, {
      foreignKey: {
        allowNull: false
      }
    });


    // Associating project with user_projects
    Project.belongsToMany(models.User, {
      through: 'UserProject'
    });

    //Associating project with category
    Project.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //Insert the project seed data
  Project.sync().then(() => {
    Project.bulkCreate(projectSeeds, {
      ignoreDuplicates: true
    });
  });

  return Project;
};
