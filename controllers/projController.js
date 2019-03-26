const db = require("../models");

// class ProjectController {
//   findAll = (req, res) => {

//   }
// }

// module.exports = ProjectController

// Defining methods for the projController
module.exports = {
  findAll: function (req, res) {
    db.Project.findAll({
    }).then(function (projects) {
      res.json(projects);
    });
  },

  findCarouselProjects: function (req, res) {
    db.Project.findAll({
      where: {
        carousel: 1
      }
    }).then(function (projects) {
      res.json(projects);
    });
  },

  //Method takes in category from params and searches for all 
  //projects of that category.
  findByCategory: function(req, res) {
    const category = req.params.category;
    console.log(category);
    db.Project.findAll({
      where: {
        CategoryId: category
      }
    }).then(function (categoryResults) {
      res.json(categoryResults);
    } )
  },

  findProjDetail: function (req, res) {
    const id = req.params.id;
    db.Project.findOne({
      //query by id
      where: {
        id: id
      }
    }).then(function (projectDetails) {
      res.json(projectDetails);
    })
  },

  create: function (req, res) {
    const newProj = req.body;
    db.Project.create(newProj)
      .then(dbProj => {
        const UserProject = {
          ProjectId: dbProj.id,
          UserId: dbProj.ownerId,
          is_owner: true
        }
        db.UserProject.create(UserProject)
        .then(() => {
          res.send(dbProj);
        })
        
      });
  }

  // createUserProject: function (req, res){
  //   const userId = req.body.ownerId;
  //   db.Project.findAll()
  //     .then(function (dbProject){
  //       const newUserProjects = [];

  //       dbProject.forEach(project => {
  //         const UserProject = {
  //           ProjectId: project.id,
  //           UserId: userId,
  //           is_owner: true
  //         }

  //       newUserProjects.push(UserProject);
  //       });

  //       db.UserProject.bulkCreate(newUserProjects)
  //         .then(function (dbUserProjs){
  //           res.json(dbUserProjs);
  //         });
  //     });
  // }

  // create: async function (req, res) {
  //   const newProj = req.body;
  //   const dbProj = await db.Project.create(newProj)
  //   res.send(dbProj);
  // },

  // createMany: async function (req, res) {
  //   const newProj = req.body;
  //   db.Project.create(newProj)
  //     .then(dbProj => {
  //       console.log('db project created');

  //       db.UserProject.create({
  //         userId:123,
  //         projectId: dbProj.id
  //       }).then(dbUserProj => {
  //         res.json(dbUserProj);
  //       });
  //     });

  //   console.log('hello');
  // },


  // createMany: async function (req, res) {
  //   const newProj = req.body;
  //   const dbProj = await db.Project.create(newProj)
      
  //   console.log('db project created');
        
  //   const dbuserProj = await db.UserProject.create({
  //         userId:123,
  //         projectId: dbProj.id
  //       });

  //   res.json(dbuserProj);
    
  //   console.log('hello');
  // }
};