const express = require('express');
const anasayfa = require('../controller/mainPage');
const product = require('../controller/productController')


const router = express.Router();

router.get('/', anasayfa)
router.get('/viewAmazon', product.viewAmazon)
router.get('/viewHepsi', product.viewHepsi)
router.post('/addHepsi', product.addProductH);
router.post('/addAmazon', product.addProductA);
module.exports = router;