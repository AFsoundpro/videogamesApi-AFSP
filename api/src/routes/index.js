const { Router } = require('express');
const router = Router();
const  {getVideogames}  = require('../controllers/getVideogames.js'); 
const {getVideogamesById} = require('../controllers/getVideogamesById.js');
const {getGenres} = require('../controllers/getGenres.js');
const {getVideogamesByName} = require('../controllers/getVideogamesByName.js');

router.get('/videogames', getVideogames);
router.get('/videogames/:id', getVideogamesById);
router.get('/videogames/:name', getVideogamesByName);
// router.post('/videogames');
router.get('/genres', getGenres);

module.exports = router;
