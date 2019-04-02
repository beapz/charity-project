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
      include: [db.Category, db.Benefactor]
    }).then(function (projects) {
      res.json(projects);
    });
  },

  findCarouselProjects: function (req, res) {
    db.Project.findAll({
      where: {
        carousel: 1
      },
      include: [db.Category, db.Benefactor]

    }).then(function (projects) {
      res.json(projects);
      // console.log(projects)
    });
  },

  //Method takes in category from params and searches for all 
  //projects of that category.
  findByCategory: function (req, res) {
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    db.Project.findAll({
      where: {
        CategoryId: categoryId
      },
      include: [db.Category]
    }).then(function (categoryResults) {
      res.json(categoryResults);
    })
  },

  findByBenefactor: function (req, res) {
    const benefactorId = req.params.categoryId;
    console.log(benefactorId);
    db.Project.findAll({
      where: {
        BenefactorId: benefactorId
      },
      include: [db.Benefactor]
    }).then(function (benefactorResults) {
      res.json(benefactorResults);
    })
  },

  findProjDetail: function (req, res) {
    const id = req.params.id;
    db.Project.findOne({
      //query by id
      where: {
        id: id
      },
      include: [db.Category, db.Benefactor]
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
          BenefactorId: dbProj.benefactorId,
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