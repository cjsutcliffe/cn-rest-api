const { Router } = require("express");
const { addMovie, listMovies, updateDirector, deleteMovie } = require("./moviesControllers");

const movieRouter = Router();

movieRouter.post("/addMovie", addMovie);
movieRouter.get("/listMovies", listMovies);
movieRouter.put("/updateDirector", updateDirector);
movieRouter.delete("/deleteMovie", deleteMovie);



module.exports = movieRouter;