const express = require('express');
const router = express.Router();
const mijozlarControllers = require('../controllers/mijozlar.js');


router.get('/', mijozlarControllers.getAllMijozlars);

router.get('/:id', mijozlarControllers.getMijozById);

router.post('/', mijozlarControllers.postNewMijoz);

router.put('/:id', mijozlarControllers.putMijozById);

router.delete('/:id', mijozlarControllers.deleteMijozById);

module.exports = router