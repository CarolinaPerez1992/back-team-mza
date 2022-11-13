const Show = require("../models/show");
const show = require("../models/show");

const controller = {
  create: async (req, res) => {
    try {
      let new_show = await show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  readShows: async (req, res) => {
    let query = {};

    if (req.query.hotelId) {
      query = { hotelId: req.query.hotelId };
    }
    try {
      let shows = await Show.find(query);
      if (shows) {
        res.status(200).json({
          success: true,
          message: "Show was found",
          data: shows,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Show no found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
