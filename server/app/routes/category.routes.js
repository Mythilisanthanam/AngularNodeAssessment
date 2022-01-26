
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryM=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryM.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryM.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryM.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryM.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryM.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryM.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryM.deleteAll);
  
    app.use('/api/categoryMs', router);
  };