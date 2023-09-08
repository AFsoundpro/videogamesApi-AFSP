const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
require('dotenv').config();
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
    try {
        const {data} = await axios.get(`${URL}?key=${API_KEY}`);
        let videogame = {
            id: data.id,
            name: data.name
        }
        return videogame.name 
        ? res.json(videogame)
        : res.status(404).send('Not found')

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {getVideogames};