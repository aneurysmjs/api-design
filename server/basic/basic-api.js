let express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

let frameworks = [{name: 'angular2', id: '1'}, {name: 'react', id: '2'}],
   id = 0;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'));

/*
 * this middleware will run if it detects an url that's using s query parameter with the given name,
 * so if we hit an url with '/id' it'll run.
 */
app.param('id', function (req, res, next, id) {
  
  let framework = frameworks.filter((f) => f.id === id)[0];

  if (framework) {
    req.framework = framework;
    next();
  } else {
    res.send();
  }
  
});

app.get('/frameworks', (req, res) => {
  res.json(frameworks);
});

app.get('/frameworks/:id', (req, res) => {

  let framework = frameworks.filter(({id}) => id === req.params.id)[0];

  res.json(framework || {});

});

app.post('/frameworks', (req, res) =>  {

  let framework = req.body;

  id += 1;

  framework.id = id + ''; // coerce to string

  frameworks = [...frameworks, framework];

  res.json(framework);
});

app.put('/frameworks/:id', (req, res) =>  {

  let framework = req.body,
     index = frameworks.indexOf(frameworks.filter(({id}) => id === req.params.id)[0]);

  if (framework.id) {
    delete framework.id
  }

  if (!frameworks[index]) { // is this index not exists, don't do anything
    res.send();
  } else {
    frameworks[index] = framework;
    console.log('frameworks');
    console.log(frameworks);
    res.json(framework);
  }

});

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