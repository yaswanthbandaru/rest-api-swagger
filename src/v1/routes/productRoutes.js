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

/**
 * @swagger
 * /v1/products:
 *  post:
 *      summary: Create a product
 *      description: Create a product into Database
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: Product is created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          proporties:
 *                              name: productId
 *                              type: string
 */
router.post('/', checkAuth, productController.createProduct);

/**
 * @swagger
 * /v1/products/{productId}:
 *  get:
 *      summary: Get a Product
 *      description: Retrieve a single product by productId
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: productId
 *          required: true
 *          schema:
 *            type: string
 *          description: The product ID
 *      responses:
 *          200:
 *              description: A single product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              productId:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              price:
 *                                  type: number
 *                              description:
 *                                  type: string
 */
router.get('/:productId', productController.getProductById);
router.patch('/:productId', checkAuth, productController.updateProductById);
router.delete('/:productId', checkAuth, productController.deleteProductById);

module.exports = router;
