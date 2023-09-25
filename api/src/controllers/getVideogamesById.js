const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
require('dotenv').config();
const { API_KEY } = process.env;

const getVideogamesById = async (req, res) => {

    try {
        let {id} = req.params;
        console.log("Solicitando:", `${URL}/${id}?key=${API_KEY}`);
        const {data} = await axios.get(`${URL}/${id}?key=${API_KEY}`)
        console.log("Respuesta de la API:", data);
        // Devuelve toda la respuesta de la API como JSON.
        res.json(data);
        
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }

}

module.exports = {getVideogamesById};