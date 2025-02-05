const express = require('express');
const router = new express.Router();

const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: API for user operations in the System
 */

/**
 * @swagger
 * /v1/users/signup:
 *  post:
 *     summary: Create a user
 *     description: Create a user with email and password
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties: 
 *                      email:
 *                          type: string
 *                          example: 'john_doe@abc.com'
 *                      password:
 *                          type: string
 *                          example: 'password123'
 *     responses:
 *      201:
 *          description: User created successfully
 *      400:
 *          description: Bad request
 */
router.post('/signup', userController.createUser);

/** 
 * @swagger
 * /v1/users/login:
 *  post:
 *     summary: Login as a user
 *     description: Verifies the user credientials and returns a token
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      email: 
 *                          type: string
 *                          example: 'john_doe@abc.com'
 *                      password:
 *                          type: string
 *                          example: 'password123'
 *     responses:
 *      200:
 *          description: User verified successfully
 *      400:
 *          description: Unauthorized
 */
router.post('/login', userController.verifyUser);

module.exports = router;
