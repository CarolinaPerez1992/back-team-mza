const Itinerary = require('../models/Itinerary');

const controller = {

    create: async (req, res) => {
        try {         
            let new_itinerary = await Itinerary.create(req.body);
            res.status(201).json(
                {
                id: new_itinerary._id,
                success: true,
                message: 'User created successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readItineraries: async (req, res) => {
        let query = {}

        if (req.query.citiId) {
            query = { citiId: req.query.citiId };
        }
        try {
            let itineraries = await Itinerary.find(query);
            if (itineraries) {
                res.status(200).json({
                    success: true,
                    message: "Event was found",
                    data: itineraries,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Event no found"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller;