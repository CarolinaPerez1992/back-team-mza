const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/cities", function () {
  it("verify that it is an array of cities", function (done) {
    request(app)
      .get("/api/cities/")
      .expect((res) => {
        assert.isArray(res.body.data);
        res.body.data.forEach((city) => {
          assert.isObject(city);
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
  describe("POST /api/cities", function () {
    it("verify that the user sends a string in the name field", function (done) {
        request(app)
            .post("/api/cities")
            .send({
                name: "Sydney",
                continent: "Oceanía",
                photo:
                    "https://898904.smushcdn.com/2130394/wp-content/uploads/2017/11/estudiar-en-sydney-1-1023x424.jpg?lossy=1&strip=1&webp=1",
                population: 1000000,
                userId: "636e67886d5bdab4b6f1716d"
            })
            .expect((res) => {
                assert.isString(res.body.data.name, 'Name is string');
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    })
});
describe("POST /api/hotels", function () {
    it("check status 200 when unable to create a hotel", function (done) {
        request(app)
            .post("/api/hotels")
            .send({
                name: "S",
                photo:
                    "https://898904.smushcdn.com/2130394/wp-content/uploads/2017/11/estudiar-en-sydney-1-1023x424.jpg?lossy=1&strip=1&webp=1",
            })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
