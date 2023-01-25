const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    director: {
        type: String,
        unique: false,
        required: false,
        default: "Unknown director"
    },
    actor: {
        type: String,
        unique: false,
        required: false,
        default: "Unknown actor"
    },
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
