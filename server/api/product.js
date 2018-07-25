const router = require('express').Router();
const { Product } = require('../db/models');

// GET api/products/
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
