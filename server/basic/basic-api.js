let express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

let frameworksRouter = require('./routers/frameworks-router');

app.use(morgan('combined'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
 * this is called `mounting` so to whenever requests hits '/frameworks'
 * this this router
 */
app.use('/frameworks', frameworksRouter);

// Error Handler middleware
app.use(function (err, req, res, next) {
  console.log('err');
  console.log(err);
  if (err) {
    res.status(500).send(err);
  }
});

app.listen(3000);
console.log('on port 3000');