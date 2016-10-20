let usersRouter = require('express').Router();

let users = [{
     name: 'Matthias',
     age: 7,
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
usersRouter.param('id', (req, res, next, id) => {

  let user = users.filter((f) => f.id === id)[0];

  if (user) {
    req.user = user;
    next();
  } else {
    res.send();
  }

});

/**
 * we can refacore our routes using the '.route()' method, so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
usersRouter.route('/')
   .get((req, res) => {
     res.json(users);
   })
   .post(updateId, (req, res) => {

     let user = req.body;

     users = [...users, user];

     res.json(user);
   });


usersRouter.route('/:id')
   .get((req, res) => {

     let user = users.filter(({id}) => id === req.params.id)[0];

     res.json(user || {});

   })
   .put((req, res) => {

     let user = req.body,
        index = users.indexOf(users.filter(({id}) => id === req.params.id)[0]);

     if (user.id) {
       delete user.id
     }

     if (!users[index]) { // is this index not exists, don't do anything
       res.send();
     } else {
       users[index] = user;
       res.json(user);
     }

   })
   .delete((req, res) => {

     let user = users.filter(({id}) => id === req.params.id)[0],
        index = users.indexOf(users.filter(({id}) => id === req.params.id)[0]);

     if (index !== -1) {

       users = [
         ...users.slice(0, index),
         ...users.slice(index + 1)
       ];

       res.json(user);

     } else {
       res.send(new Error('fuck you'));
     }

   });

module.exports = usersRouter;