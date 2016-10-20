let categoriesRouter = require('express').Router();

let categories = [{
     categoryName: 'Nodejs',
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
categoriesRouter.param('id', (req, res, next, id) => {

  let category = categories.filter((f) => f.id === id)[0];

  if (category) {
    req.category = category;
    next();
  } else {
    res.send();
  }

});

/**
 * we can refacore our routes using the '.route()' method, so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
categoriesRouter.route('/')
   .get((req, res) => {
     res.json(categories);
   })
   .post(updateId, (req, res) => {

     let category = req.body;

     categories = [...categories, category];

     res.json(category);
   });


categoriesRouter.route('/:id')
   .get((req, res) => {

     let category = categories.filter(({id}) => id === req.params.id)[0];

     res.json(category || {});

   })
   .put((req, res) => {

     let category = req.body,
        index = categories.indexOf(categories.filter(({id}) => id === req.params.id)[0]);

     if (category.id) {
       delete category.id
     }

     if (!categories[index]) { // is this index not exists, don't do anything
       res.send();
     } else {
       categories[index] = category;
       res.json(category);
     }

   })
   .delete((req, res) => {

     let category = categories.filter(({id}) => id === req.params.id)[0],
        index = categories.indexOf(categories.filter(({id}) => id === req.params.id)[0]);

     if (index !== -1) {

       categories = [
         ...categories.slice(0, index),
         ...categories.slice(index + 1)
       ];

       res.json(category);

     } else {
       res.send(new Error('fuck you'));
     }

   });

module.exports = categoriesRouter;