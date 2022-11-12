const City = require('../models/City');

const controller = {

    create: async (req, res) => {
        try {         
            let new_city = await City.create(req.body);
            res.status(201).json(
                {
                id: new_city._id,
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
}

module.exports = controller;