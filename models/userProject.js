const userProjectSeeds = require("./scripts/userProjectSeeds");

module.exports = function (sequelize, DataTypes) {
    //Define the user_project table
    var UserProject = sequelize.define("UserProject", {
        hours_pledged: DataTypes.INTEGER,
        is_owner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    //Associate the user_project with project
    UserProject.associate = function (models) {
        UserProject.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
//associate the user_project with user
        UserProject.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    //Insert the project seed data
    UserProject.sync().then(() => {
        UserProject.bulkCreate(userProjectSeeds, {
            ignoreDuplicates: true
        });
    });

    return UserProject;
};
