const categorySeeds = require("../scripts/categorySeeds");

module.exports = function (sequelize, DataTypes) {
    //Define the category table
    let Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING
    });

    // Category.associate = function (models) {
    //     // Associating category with Projects
    //     Category.hasMany(models.Project, {
    //         onDelete: "cascade"
    //     });
    // };

    //Insert category seed data
    Category.sync().then(() => {
        Category.bulkCreate(categorySeeds, {
            ignoreDuplicates: true
        });
    });

    return Category;
};

