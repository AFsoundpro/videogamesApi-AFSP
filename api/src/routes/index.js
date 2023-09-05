const express = require('express');
const router = express.Router();

// Ruta GET en /api/ejemplo
router.get('/', (req, res) => {
  res.send('Esta es una ruta de ejemplo.');
});

module.exports = router;
