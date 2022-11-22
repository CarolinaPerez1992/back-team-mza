const City = require('../models/City');

const controller = {

    create: async (req, res) => {
        try {         
            let new_city = await City.create(req.body);
            res.status(201).json(
                {
                id: new_city._id,
                data: new_city,
                success: true,
                message: 'City created successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        let query = {}
        if(req.query.continent){
            query = { continent: req.query.continent}
        }
        if(req.query.name){
            query = {
                ...query, 
                name: {$regex: req.query.name, $options: 'i'}
            }
        }

        try {         
            let get_city = await City.find(query);
            res.status(200).json(
                {
                id: get_city._id,
                data: get_city,
                success: true,
                message: 'City read successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readOnlyOne: async(req,res) => {
        let id = req.params.id;
        try {
            let city = await City.findOne({ _id: id }).populate({ path: 'userId', select: 'name photo -_id'});
            if (city) {
                res.status(200).json({
                    response: city,
                    success: true,
                    message: "found city"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no city obtained"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async(req,res) => {
        let { id } = req.params
        try {
            let city = await City.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (city) {
                res.status(200).json({
                    success: true,
                    message: "The city was successfully modified"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There is no city that matches"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async(req,res) => { 
        let { id } = req.params
        try {
            let city = await City.findOneAndDelete({ _id: id })
            if (city) {
                res.status(200).json({
                    success: true,
                    message: "the city is removed"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "there are no matching cities"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = controller;