const express = require('express');
const router = new express.Router();
const productController = require('../controllers/productController');
const checkAuth = require('../authentication/checkAuth');

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: API for products in the System
 */

/**
 * @swagger
 * /v1/products:
 *  get:
 *      summary: Get all products
 *      description: Retrive a list of  all products
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: A list of products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              type: object
 */
router.get('/', productController.getAllProducts);
router.post('/', checkAuth, productController.createProduct);
router.get('/:productId', productController.getProductById);
router.patch('/:productId', checkAuth, productController.updateProductById);
router.delete('/:productId', checkAuth, productController.deleteProductById);

module.exports = router;
