let frameworksRouter = require('express').Router();

let frameworks = [],
   id = 0;


function updateId(req, res, next) {
  console.log('req.body');
  console.log(req.body);
  if (!req.body.id) {
    id +=1;
    req.body.id = id + '';
  }

  next();
}

/*
 * this middleware will run if it detects an url that's using s query parameter with the given name,
 * so if we hit an url with '/id' it'll run.
 */
frameworksRouter.param('id', function (req, res, next, id) {

  let framework = frameworks.filter((f) => f.id === id)[0];

  if (framework) {
    req.framework = framework;
    next();
  } else {
    res.send();
  }

});

/**
 * when '/' is hitting the root of the router not the root of the application
 */
frameworksRouter.get('/', (req, res) => {
  res.json(frameworks);
});

frameworksRouter.get('/:id', (req, res) => {

  let framework = frameworks.filter(({id}) => id === req.params.id)[0];

  res.json(framework || {});

});

frameworksRouter.post('/', updateId, (req, res) =>  {

  let framework = req.body;

  frameworks = [...frameworks, framework];
  console.log('frameworks');
  console.log(frameworks);
  res.json(framework);
});

frameworksRouter.put('/:id', (req, res) =>  {

  let framework = req.body,
     index = frameworks.indexOf(frameworks.filter(({id}) => id === req.params.id)[0]);

  if (framework.id) {
    delete framework.id
  }

  if (!frameworks[index]) { // is this index not exists, don't do anything
    res.send();
  } else {
    frameworks[index] = framework;
    res.json(framework);
  }

});

module.exports = frameworksRouter;