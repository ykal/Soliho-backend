let express = require('express');
let router = require('./app/routes/mainRoutes');
let bodyParser = require('body-parser');
var cors = require('cors')

let config = require('./config');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('', router);

app.get('/', function (req, res) {
    res.send("working");
});

app.listen(config.port);

console.log(`Soliho Server is listening on port ${config.port} ...`);