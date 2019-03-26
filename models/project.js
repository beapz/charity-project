const projectSeeds = require("../scripts/projectSeeds");

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
    date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    location: DataTypes.STRING,
    ownerId: {
      field: 'OwnerId',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    benefactorId:{
      field: 'BenefactorId',
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    categoryId:{
      field: 'CategoryId',
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  });

  // Associate the projects with benefactor 
  Project.associate = function (models) {
    // Project.belongsTo(models.Benefactor, {

    //   foreignKey: {
    //     allowNull: false
    //   }
    // });

    
    // Associating project with user_projects
    Project.belongsToMany(models.User, {
      through: 'UserProject'
    });

    //Associating project with category
    Project.belongsTo(models.Benefactor, {
      foreignKey: 'benefactorId',
      targetKey: 'id'
    });

    Project.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      targetKey: 'id'
    });

    Project.belongsTo(models.User, {
      foreignKey: 'ownerId',
      targetKey: 'id'
    });

  };

  // // Insert the project seed data
  Project.sync().then(() => {
    Project.bulkCreate(projectSeeds, {
      ignoreDuplicates: true
    });
  });

  return Project;
};


