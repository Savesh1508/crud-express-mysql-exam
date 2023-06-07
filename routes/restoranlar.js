const express = require('express');
const router = express.Router();
const restoranlarControllers = require('../controllers/restoranlar.js');


router.get('/', restoranlarControllers.getAllRestorans);

router.get('/:id', restoranlarControllers.getRestoranById);

router.post('/', restoranlarControllers.postNewRestoran);

router.put('/:id', restoranlarControllers.putRestoranById);

router.delete('/:id', restoranlarControllers.deleteRestoranById);

module.exports = router