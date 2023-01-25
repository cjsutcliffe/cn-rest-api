const Movie = require("./moviesModels");

//Create - Working
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

//Read - Working
exports.listMovies = async (request, response) => {
    try {
        const movies = await Movie.find({});
        response.status(218).send({ allMovie: movies });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//Update Director - Working
exports.updateDirector = async (request, response) => {
    try {
        await Movie.updateOne({title: request.body.title}, {director: request.body.director}),
        response.send({msg: `Director updated for ${request.body.title}`});
    } catch (error) {
        console.log(error);
        response.status(401).send({error: error.message});
    };
};

//Update Actor - Working
exports.updateActor = async (request, response) => {
    console.log("entering updateActor...")
    try {
        await Movie.updateOne({title: request.body.title}, {actor: request.body.actor}),
        response.send({msg: `Actor updated for ${request.body.title}`});
    } catch (error) {
        console.log(error);
        response.status(401).send({error: error.message});
    };
};

//Delete - Working
exports.deleteMovie = async (request, response) => {
    try {
        const deletedMovie = await Movie.deleteOne({title: request.body.title});
        if (deletedMovie.deletedCount > 0) {
            response.status(200).send({ movie: deletedMovie });
        }
        else {
            throw new Error("Did not delete.");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ error: error.message });
    }
}



