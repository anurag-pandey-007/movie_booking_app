const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    movieName: {
        type: String,
        required: true,
    },
    yearOfMovie: {
        type: Number,
        required: true,
    },
    Director: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    MovieCasts: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Celebrity"
            }],
        required: true,
    },
    review: [{
        comment: {
            type: String,
            default: null
        },
        rating: {
            type: Number,
            default: 0,
        },
        respondTime: {
            type: Date,
        },
        userId: {
            type: mongoose.Types.ObjectId,
        }
    }],
    releaseDate: {
        type: Date,
    }
}, { timestamps: true });


const Movie = mongoose.model('Movie', movieSchema, 'Movie');

module.exports = Movie;