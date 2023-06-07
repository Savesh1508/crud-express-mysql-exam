const express = require('express');
const router = express.Router();
const buyurtmalarControllers = require('../controllers/buyurtmalar.js');


router.get('/', buyurtmalarControllers.getAllBuyurtmalars);

router.get('/:id', buyurtmalarControllers.getBuyurtmaById);

router.post('/', buyurtmalarControllers.postNewBuyurtma);

router.put('/:id', buyurtmalarControllers.putBuyurtmaById);

router.delete('/:id', buyurtmalarControllers.deleteBuyurtmaById);


module.exports = router