const express = require('express');
const router = express.Router();
const yetkazuvchilarControllers = require('../controllers/yetkazuvchilar.js');


router.get('/', yetkazuvchilarControllers.getAllYetkazuvchilars);

router.get('/:id', yetkazuvchilarControllers.getYetkazuvchiById);

router.post('/', yetkazuvchilarControllers.postNewYetkazuvchi);

router.put('/:id', yetkazuvchilarControllers.putYetkazuvchiById);

router.delete('/:id', yetkazuvchilarControllers.deleteYetkazuvchiById);

module.exports = router