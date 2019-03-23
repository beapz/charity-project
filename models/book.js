// // const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;

// // const bookSchema = new Schema({
// //   title: { type: String, required: true },
// //   author: { type: String, required: true },
// //   synopsis: String,
// //   date: { type: Date, default: Date.now }
// // });

// // const Book = mongoose.model("Book", bookSchema);

// // module.exports = Book;

// module.exports = function(sequelize, DataTypes){
//   //Define the book table
//   const Book = sequelize.define("Book", {
//     name: DataTypes.STRING,
//     owner_name: DataTypes.STRING,
//     owner_id: DataTypes.INTEGER,
//     category: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     photo_url: DataTypes.STRING,
//     total_hours: DataTypes.INTEGER,
//     hours_received: DataTypes.INTEGER
//     });

//   return Book;
// }
