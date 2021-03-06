var controller = require('../../controllers/users');
var User = require('../../models/user');
var chai = require('chai');
var expect = chai.expect;
const app = require('../../app');
var supertest = require('supertest');
var Promise = require('bluebird');


describe('controllers/users.test.js', () => {

  let user1 = new User({
    email: 'user1@gmail.com',
    password: '123456'
  });
  let user2 = new User({
    email: 'user2@gmail.com',
    password: '123456'
  });

  before(done => {
    Promise.join(controller.save(user1), controller.save(user2), function(u1, u2) {
      user1 = u1;
      user2 = u2;
      done();
    });
  });

  after(done => {
    //
    User.deleteMany({ email: { $in: [user1.email, user2.email] } })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      })
  });

  it('should add each other to friend list.', (done) => {
    controller.addFriend(user1, user2)
      .then(users => {
        expect(users).to.have.lengthOf(2);
        users.map(function (user) {
          expect(user.friends).to.have.lengthOf(1);
        });
        done();
      })
      .catch(err => {
        console.log(err);
        done()
      });
  });

  it('should remove friend from friend list.', (done) => {
    controller.unFriend(user1, user2)
      .then(users => {
        expect(users).to.have.lengthOf(2);
        users.map(function (user) {
          expect(user.friends).to.be.empty;
        });
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });

});