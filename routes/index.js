const express = require('express');
const router = express.Router();

/* GET home page */
const Movie = require('../models/Movie.model');

// GET /movies/:id route handler
router.get('/movie/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id); // Fetch movie details based on ID
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('movie-details', { movie }); // Render the movie-details.hbs view and pass movie details
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;



