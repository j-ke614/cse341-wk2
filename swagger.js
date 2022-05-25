const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: { 
        title: 'My API',
        description: 'Temple API',
    
    },
    host: 'https://cse341-wk2.herokuapp.com/',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
