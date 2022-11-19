const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')


describe('GET /api/cities', function(){

    it('verify that it is an array of cities', function(done){
        request(app)
        .get('/api/cities/')
        .expect(response => {
            assert.typeOf(response.body.data, 'array', 'Is Array')
        })
        .end(function(err, res){
            if(err){
                return done(err)
            }
            done()
        })
    })
})