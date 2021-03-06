
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
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    location: DataTypes.STRING,
    ownerId: {
      field: 'OwnerId',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    benefactorId: {
      field: 'BenefactorId',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    categoryId: {
      field: 'CategoryId',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    carousel: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  //Associations with remaining tables
  Project.associate = function (models) {
    // Associating project with user_projects
    Project.belongsToMany(models.User, {
      through: 'UserProject'
    });

    //Associating project with benefactor
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
  Project.realSync = async () => {
    await Project.sync()
      return await Project.bulkCreate(projectSeeds, {
        ignoreDuplicates: true
      });
  };

  return Project;
};

