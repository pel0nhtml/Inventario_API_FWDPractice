const express = require('express');
const router = express.Router();

const {
    getProducts,
    getProductsXid,
    postProduct,
    putProduct,
    deleteProduct
} = require ('../Controllers/productsControllers');


// Rutas yo te invoco
router.get('/', getProducts);
router.get('/:id', getProductsXid);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct)

module.exports = router;