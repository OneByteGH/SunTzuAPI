const express = require('express');
const sunTzu = require('sun-tzu-quotes');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.get("/quote", (req, res) => {
    res.status(200).json({
        "quote": sunTzu()
    });
});

app.get("/quote/:id", (req, res) => {
    const id = req.params.id;

    if(id > 0 && id < sunTzu.quotes.length) {
        res.status(200).json({
            "quote": sunTzu.quotes[id]
        });
    } else {
        res.status(404).json({
            "error": "Quote not found"
        });
    }
});

app.get("/quotes", (req, res) => {
    res.status(200).json(sunTzu.quotes);
});


app.listen(process.env.PORT, () => console.log(`Sun Tzu Quotes API listening on port ${process.env.PORT}`));
