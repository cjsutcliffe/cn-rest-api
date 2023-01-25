const Movie = require("./moviesModels");

//Create
exports.addMovie = async (request, response) => {
    console.log(request);
    try {
        const newMovie = await Movie.create(request.body);
        response.status(200).send({ movie: newMovie });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//Read
exports.listMovies = async (request, response) => {
    try {
        const movies = await Movie.find({});
        response.status(218).send({ allMovie: movies });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//Update


//Delete




