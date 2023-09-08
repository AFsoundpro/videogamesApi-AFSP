const express = require('express');
const router = express.Router();
const { getVideogames } = require('../controllers/getVideogames') 


router.get('/videogames', getVideogames);
router.get('/videogames/:idVideogame');
router.get('/videogames/name?="..."');
router.post('/videogames');
router.get('/genres');

module.exports = router;
