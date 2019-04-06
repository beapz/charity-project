
const userProjectSeeds = require("../scripts/userProjectSeeds");

module.exports = function (sequelize, DataTypes) {
    //Define the user_project table
    let UserProject = sequelize.define("UserProject", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
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
    //anonymous function is being created and declared at the same time
    UserProject.realSync = async () => {
        await UserProject.sync()
            return await UserProject.bulkCreate(userProjectSeeds, {
                ignoreDuplicates: true
            });
    };
    return UserProject;
};
