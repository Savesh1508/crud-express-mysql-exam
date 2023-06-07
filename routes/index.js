const express = require('express');
const router = express.Router();

const ovqatlarRoutes = require("../routes/ovqatlar.js");
const restoranlarRoutes = require("../routes/restoranlar.js");
const menyuRoutes = require("../routes/restoran_menu.js");
const yetkazuvchilarRoutes = require("../routes/yetkazuvchilar.js");
const mijozlarRoutes = require("../routes/mijozlar.js");
const buyurtmalarRoutes = require("../routes/buyurtmalar.js");
const finderRoute = require("../routes/finder.js");


router.use('/ovqatlar', ovqatlarRoutes);

router.use('/restoranlar', restoranlarRoutes);

router.use('/menu', menyuRoutes);

router.use('/yetkazuvchilar', yetkazuvchilarRoutes);

router.use('/mijozlar', mijozlarRoutes);

router.use('/buyurtmalar', buyurtmalarRoutes);

router.use('/finder', finderRoute);

module.exports = router