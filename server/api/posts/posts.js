let postsRouter = require('express').Router();

let posts = [{
     postName: `Design API's with Nodejs`,
     category: 'Nodejs',
     author: 'blackend'
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
postsRouter.param('id', (req, res, next, id) => {

  let post = posts.filter((f) => f.id === id)[0];

  if (post) {
    req.post = post;
    next();
  } else {
    res.send();
  }

});

/**
 * we can refacore our routes using the '.route()' method, so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
postsRouter.route('/')
   .get((req, res, next) => {
     res.json(posts);
     //next(new Error('post error'));
   })
   .post(updateId, (req, res) => {

     let post = req.body;

     posts = [...posts, post];

     res.json(post);


   });


postsRouter.route('/:id')
   .get((req, res) => {

     let post = posts.filter(({id}) => id === req.params.id)[0];

     res.json(post || {});

   })
   .put((req, res) => {

     let post = req.body,
        index = posts.indexOf(posts.filter(({id}) => id === req.params.id)[0]);

     if (post.id) {
       delete post.id
     }

     if (!posts[index]) { // is this index not exists, don't do anything
       res.send();
     } else {
       posts[index] = post;
       res.json(post);
     }

   })
   .delete((req, res) => {

     let post = posts.filter(({id}) => id === req.params.id)[0],
        index = posts.indexOf(posts.filter(({id}) => id === req.params.id)[0]);

     if (index !== -1) {

       posts = [
         ...posts.slice(0, index),
         ...posts.slice(index + 1)
       ];

       res.json(post);

     } else {
       res.send(new Error('fuck you'));
     }

   });

module.exports = postsRouter;