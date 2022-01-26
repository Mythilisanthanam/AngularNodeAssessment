const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productM = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productM.create);
  
    // Retrieve all Tutorials
    router.get("/", productM.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productM.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productM.findOne);
    // Update a Tutorial with id
    router.put("/:id", productM.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productM.delete);
  
    // Delete all Tutorials
    router.delete("/", productM.deleteAll);
  
    app.use('/api/productMs', router);
  };