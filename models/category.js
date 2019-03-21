module.exports = function(sequelize, DataTypes){
  //Define the book table
  const Category = sequelize.define("Category", {
    category: DataTypes.STRING,
    });

  return Category;
}
