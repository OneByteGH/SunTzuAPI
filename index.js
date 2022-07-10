const express = require('express')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express()

app.get('/', (req, res) => {
})

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log(`Sun Tzu Quotes API listening on port 3000`)
})