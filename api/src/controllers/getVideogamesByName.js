const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
require('dotenv').config();
const { API_KEY } = process.env;

const getVideogamesByName = async (res,req) => {
    try {
        const {name} = req.params;
    const query = name.toLowerCase();
    const apiResponse = await axios.get(`${URL}?key=${API_KEY}&search=${query}`);
    const apiGames = apiResponse.data.results;
    if(apiGames.length === 0) {
        return res.status(404).json({message: 'No hay videojuegos'});
    }
    const first15games = apiGames.slice(0,15);
    const mappedResults = first15games.map((data) => ({
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms,
        image: data.background_image,
        releaseDate: data.released,
        rating: data.rating,
        genres: data.genres
    }));
    return res.status(200).json(mappedResults);
    } catch (error) {
        console.error('Error al buscar videojuegos', error);
        return res.status(500).json({message: 'error interno del servidor.'});
    }

}

module.exports = {getVideogamesByName};