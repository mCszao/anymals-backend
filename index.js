const express = require('express');
const routes = require('./routes/routes');
const port = process.env.PORT || 3000;
const app = express();
app.use('/', routes);

app.get('*', (req, res) => {
    res.send('Você caiu na rota principal');
});

app.listen(port, console.log('server runing...'));

