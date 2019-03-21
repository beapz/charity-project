module.exports = function(sequelize, DataTypes){
  //Define the book table
  const Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    category_id: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo_url: DataTypes.STRING,
    total_hours: DataTypes.INTEGER,
    hours_received: DataTypes.INTEGER,
    date_mmddyy: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    event_location: DataTypes.STRING,
    event_location_url: DataTypes.STRING,
    project_contact_phone: DataTypes.STRING,
    project_contact_email: DataTypes.STRING,
    });

  return Project;
}


