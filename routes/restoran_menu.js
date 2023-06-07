const express = require('express');
const router = express.Router();
const menyuControllers = require('../controllers/restoran_menu.js');


router.get('/', menyuControllers.getAllRestoranMenus);

router.get('/:id', menyuControllers.getRestoranMenuById);

router.post('/', menyuControllers.postNewRestoranMenu);

router.put('/:id', menyuControllers.putRestoranMenuById);

router.delete('/:id', menyuControllers.deleteRestoranMenuById);

module.exports = router