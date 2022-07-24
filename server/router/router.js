const express = require('express');
const router = express.Router();
const { getProducts } = require('../controller/controller');

router.post('/products', getProducts);


module.exports = router;