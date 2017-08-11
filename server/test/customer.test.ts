import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';
import {MongoClient} from 'mongodb';
import config from '../src/config';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Customers', () => {
  let mydb;
  //create test customers
  before((done) => {
    MongoClient.connect(config.get('connection')).then(db => {
      mydb = db;
      done()
    });
  });

  it('Add new customer', () => {
    return chai.request(app)
      .post('/customers')
      .send({
        "reference": "00000-00000",
        "name": "Jane Doe",
        "mortgageType": "Remo",
        "vulnerability": "Risk"
      })
      .then(res => {
        expect(res.status).to.equal(200);
      });
  });

  //remove test customers
  after((done) => {
    mydb.collection('customers').deleteOne({reference: "00000-00000"}).then(() => {
      mydb.close();
      done();
    });
  })
});
