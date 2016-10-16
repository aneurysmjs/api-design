let frameworksRouter = require('express').Router();

let frameworks = [{
     name: 'Angular2',
     company: 'google',
     id: '1'
   }],
   id = 0;

function updateId(req, res, next) {
  
  if (!req.body.id) {
    id += 1;
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
 * we can refacore our routes using the '.route()' method, so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
frameworksRouter.route('/')
   .get((req, res) => {
     res.json(frameworks);
   })
   .post(updateId, (req, res) => {

     let framework = req.body;

     frameworks = [...frameworks, framework];

     res.json(framework);
   });


frameworksRouter.route('/:id')
   .get((req, res) => {

     let framework = frameworks.filter(({id}) => id === req.params.id)[0];

     res.json(framework || {});

   })
   .put((req, res) => {

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

   })
   .delete((req, res) => {

     let framework = frameworks.filter(({id}) => id === req.params.id)[0],
        index = frameworks.indexOf(frameworks.filter(({id}) => id === req.params.id)[0]);

     if (index !== -1) {

       frameworks = [
         ...frameworks.slice(0, index),
         ...frameworks.slice(index + 1)
       ];

       res.json(framework);

     } else {
       res.send(new Error('fuck you'));
     }

   });

module.exports = frameworksRouter;