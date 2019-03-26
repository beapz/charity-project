const benefactorSeeds = require("../scripts/benefactorSeeds");

module.exports = function (sequelize, DataTypes) {
  //Define the benefactors table
  let Benefactor = sequelize.define("Benefactor", {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Benefactor.associate = function (models) {
    // Associating Benefactor with Projects
    Benefactor.hasMany(models.Project, {
        onDelete: "cascade"
    });
  };

  //Insert benefactor seed data
  Benefactor.sync().then(() => {
    Benefactor.bulkCreate(benefactorSeeds, {
      ignoreDuplicates: true
    });
  });

  return Benefactor;
};

