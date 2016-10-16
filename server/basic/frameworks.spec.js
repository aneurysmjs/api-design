var app = require('./basic-api'),
   request = require('supertest'),
   expect = require('chai').expect;

describe('frameworks CRUD', () => {

  it('should retrieve all frameworks', (done) => {
    request(app)
       .get('/frameworks')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .end((error, response) => {
         expect(response.body).to.be.an('array');
         done(); // when we finally done the test, call 'done()'
       });
  });

  it('should create a framework', (done) => {

    let framework = {
      name: 'React',
      company: 'facebook'
    };

    request(app)
       .post('/frameworks')
       .send(framework)
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(201)
       .end((error, response) => {
         let angular2 = response.body;
         framework.id = "1";
         expect(response.body).to.be.an('object');
         /**
          * using 'equal' won't work cuz it does {} === {}
          *
          * using 'eql' will do a deep equality which checks if it has the same properties with the same values
          */
         expect(angular2).to.be.eql(framework);
         done(); // when we finally done the test, call 'done()'
       });
  });

  it('should delete a framework', (done) => {

    let obj = {
      name: 'React',
      company: 'facebook'
    };

    request(app)
       .post('/frameworks')
       .send(obj)
       .set('Accept', 'application/json')
       .end((error, response) => {

         let framework = response.body;

         /**
          * before deleting something, the the object has to have an 'id' so that's why
          * I making a new framework
          */
         request(app)
            .delete(`/frameworks/${framework.id}`)
            .end((error, res) => {
              expect(res.body).to.be.eql(framework);
              done(); // when we finally done the test, call 'done()'
            });

       });
  });

  it('should update a framework', (done) => {

    let obj = {
      name: 'React',
      company: 'facebook'
    };

    request(app)
       .post('/frameworks')
       .send(obj)
       .set('Accept', 'application/json')
       .end((error, response) => {

         let framework = response.body;

         let propToUpdate = {
           name: 'ReactJs'
         };

         request(app)
            .put(`/frameworks/${framework.id}`)
            .send(propToUpdate)
            .end((error, res) => {
              expect(res.body.name).to.be.eql(propToUpdate.name);
              done();
            });

       });
  });

});