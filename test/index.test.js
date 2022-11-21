// const app = require("../app");
// const chai = require("chai");
// const assert = chai.assert;
// const request = require("supertest");

// describe("GET /api/cities", function () {
//   it("verify that it is an array of cities", function (done) {
//     request(app)
//       .get("/api/cities/")
//       .expect((res) => {
//         assert.isArray(res.body.data);
//         res.body.data.forEach((city) => {
//           assert.isObject(city);
//         });
//       })
//       .end(function (err, res) {
//         if (err) {
//           return done(err);
//         }
//         done();
//       });
//   });
// });
// describe("POST /api/cities", function () {
//   it("check that the user sends a string in the name field", function (done) {
//     request(app)
//       .post("/api/cities")
//       .send({
//         name: "New York TEST",
//         continent: "America",
//         photo: "https://imageshack.com/i/pmk1kK0tj",
//         population: 8.468,
//         userId: "636e67769d2ec6759994acc1",
//       })
//       .expect((res) => {
//         assert.isString(res.body.data.name, "Name is a string");
//       })
//       .end(function (err, res) {
//         if (err) {
//           return done(err);
//         }
//         done();
//       });
//   });
// });
// describe("POST /api/hotels", function () {
//   it("check 400 status when filter does not create a hotel", function (done) {
//     request(app)
//       .post("/api/hotels")
//       .send({
//         name: "Hotel Warwick Geneva TEST",
//         cityId: "",
//         userId: "636e7868b2e",
//       })
//       .expect(400)
//       .end(function (err, res) {
//         if (err) {
//           return done(err);
//         }
//         done();
//       });
//   });
// });
