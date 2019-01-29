const express = require('express')
const app = express()
const port = 3001
const movies = require('./movies');

app.get('/rest/movies', (req, res) => res.send(movies()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))