const { Router } = require("express");
const { addMovie, listMovies, updateDirector, updateActor, deleteMovie } = require("./moviesControllers");

const movieRouter = Router();

movieRouter.post("/addMovie", addMovie);
movieRouter.get("/listMovies", listMovies);
movieRouter.put("/updateDirector", updateDirector);
movieRouter.put("/updateActor", updateActor);
movieRouter.delete("/deleteMovie", deleteMovie);



module.exports = movieRouter;