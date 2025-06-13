const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());


const apiKey = process.env.TMDB_API_KEY

app.get('/api/movie-of-the-day', async (req, res) => {
    try{
    const moviePages = [];
    for (let i = 1; i <= 10; i++) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&vote_count.gte=500&page=${i}`);
            const data = await response.json();
            const filteredMovies = data.results.filter(movie => movie.vote_count >= 500);
            moviePages.push(filteredMovies);
        }
    const movies = moviePages;
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hash = (year * 10000 + (month + 1) * 100 + day);
    const pageIndex = hash % movies.length;
    const movieIndex = hash % movies[pageIndex].length;
    const movie = movies[pageIndex][movieIndex];
    const [videoRes, detailsRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`)
    ]);
    const videoData = await videoRes.json();
    const detailsData = await detailsRes.json();

    res.json({
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        id: movie.id,
        budget: detailsData.budget,
        revenue: detailsData.revenue,
        trailer: videoData.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
    });
} catch (error) {
    console.error('Error fetching movie data:', error);
    res.status(500).json({ error: 'No movie today :('});
}
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));