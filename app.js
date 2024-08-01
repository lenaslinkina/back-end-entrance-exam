const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cacheRoutes = require('./src/routes/cacheRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API пример',
      version: '1.0.0',
      description: 'Пример REST API с CRUD-операциями для ресурса "items"',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: `Локальный сервер, использующий порт ${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use(express.json());
app.use('/api/cache', cacheRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));




app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});