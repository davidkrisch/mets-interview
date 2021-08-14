const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
process.env.STATS_FILE= 'test/stats.csv';
const app = require('../app');

describe('Unit testing the /players route', function() {
    it('should return 404 when player id not found', function() {
      return request(app)
        .get('/players/1234')
        .then(function(response){
            assert.equal(response.status, 404)
        })
    });

    it('should return json', function() {
        return request(app)
            .get('/players/446334')
            .then(function(response){
                expect(response.header['content-type']).to.contain('application/json');
                expect(response.text).to.contain('Evan');
            })
    });

});
