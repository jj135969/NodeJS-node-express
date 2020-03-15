const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;
Update server.js as follows and remove the routes you added earlier: 
. . .
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);
