const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const movies = require('./movies');
const path = require('path');

app.get('/rest/movies', (req, res) => res.send(movies()));

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))