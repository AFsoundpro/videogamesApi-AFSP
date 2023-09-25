const axios = require('axios');
const URL = "https://api.rawg.io/api/genres";
require('dotenv').config();
const { API_KEY } = process.env;
const size = 19;

const getGenres = async (req, res) => {
    try {
        console.log("Solicitando:", `${URL}?page_size=${size}&page=1&key=${API_KEY}`);

        const { data } = await axios.get(`${URL}?page_size=${size}&page=1&key=${API_KEY}`);

        console.log("Respuesta de la API:", data);

        // Devuelve toda la respuesta de la API como JSON.
        res.json(data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {getGenres};