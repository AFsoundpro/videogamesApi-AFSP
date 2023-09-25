const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
require('dotenv').config();
const { API_KEY } = process.env;
const size = 25;


const getVideogames = async (req, res) => {
    try {
        console.log("Solicitando:", `${URL}?page_size=${size}&page=1&key=${API_KEY}`);

        const res1 = (await axios.get(`${URL}?page_size=${size}&page=1&key=${API_KEY}`)).data.results
        const res2 = (await axios.get(`${URL}?page_size=${size}&page=2&key=${API_KEY}`)).data.results
        const res3 = (await axios.get(`${URL}?page_size=${size}&page=3&key=${API_KEY}`)).data.results
        const res4 = (await axios.get(`${URL}?page_size=${size}&page=4&key=${API_KEY}`)).data.results
        const gamesApi = [...res1, ...res2, ...res3, ...res4].map((videogame) => {
            return {
                id: videogame.id,
                name: videogame.name,
                image: videogame.background_image,
                rating: videogame.rating,
                genre: videogame.genres.map((gen) => {
                    return {name: gen.name}
                })
            }
        })

        console.log("Respuesta de la API:", gamesApi);

        // Devuelve toda la respuesta de la API como JSON.
        res.json(gamesApi);
        return [...gamesApi]
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {getVideogames};