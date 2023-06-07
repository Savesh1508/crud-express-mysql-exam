const express = require('express');
const router = express.Router();
const ovqatlarControllers = require('../controllers/ovqatlar.js');


router.get('/', ovqatlarControllers.getAllOvqats);

router.get('/:id', ovqatlarControllers.getOvqatById);

router.post('/', ovqatlarControllers.postNewOvqat);

router.put('/:id', ovqatlarControllers.putOvqatById);

router.delete('/:id', ovqatlarControllers.deleteOvqatById);

module.exports = router