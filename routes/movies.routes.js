
module.exports = app =>{
    let router = require("express").Router();
    const movies = require("../Controller/movies.controller.js")
    //expose API
    app.use("/movie", router);

    //GetAll movies
    router.get("/all", movies.findAll);
    //Find One movie
    router.get("/:id", movies.findOne)
    //Create a new movie
    router.post("/", movies.create);

    // Update a Student with id
    router.put("/:id", movies.update);
    //Delelete all 
    router.delete("/delete", movies.deleteAll);
    router.delete("/delete/:id", movies.delete);

}