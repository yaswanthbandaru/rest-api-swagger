const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {

    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'API Title',
            version: '3.0',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            },
        ],
    },
    apis: ['./app.js', './src/v1/routes/*.js'], // Path to your API docs
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerDocs }