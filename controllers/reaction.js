const Reaction = require('../models/Reaction')

const controller = {

    createReaction: async (req, res) => {
        try {
            let new_reaction = await Reaction.create(req.body);
            res.status(201).json({
                id: new_reaction._id,
                success: true,
                message: 'Reaction created',
                response: new_reaction,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    read: async (req, res) => {
        let query = {};
        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId };
        }
        if (req.query.userId) {
            query = { userId: req.query.userId };
        }
        try {
            if (req.query.itineraryId) {
                let reactions = await Reaction.find(query).populate({ path: 'userId', select: 'name lastName photo' })
                if (reactions.length > 0) {
                    let lengthOfReactions = {}
                    reactions.forEach(reaction => lengthOfReactions[reaction.name] = reaction.userId.length)
                    res.status(200).json({
                        lengthOfReactions,
                        id: req.query.itineraryId,
                        data: reactions,
                        success: true,
                        message: `All reactions of the itineraryId ${req.query.itineraryId}`,
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'No reactions found',
                        data: [],
                    });
                }
            } else {
                let reactions = await Reaction.find(query).populate({ path: 'itineraryId', select: 'name photo' })
                if (reactions.length > 0) {
                    res.status(200).json({
                        data: reactions,
                        success: true,
                        message: `All reactions of the userId`,
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'No reactions found',
                        data: [],
                    });
                }
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                data: error
            })
        }
    },
    updateReaction: async (req, res) => {
        let query = {};
        let Id = req.user.id

        if (req.query.itineraryId) {
            query = {
                itineraryId: req.query.itineraryId
            };
            if (req.query.name)
                query = {
                    ...query,
                    name: req.query.name
                };
        }
        try {
            let reaction = await Reaction.findOne(query)
            if (reaction) {
                if (reaction.userId.equals(Id)) {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: [{ userId: Id }] }, { new: true })
                    res.status(200).json({
                        message: `Event dis${reaction.name}`,
                        success: true,
                        reactioned: false
                    })
                } else {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: [{ userId: Id }] }, { new: true })
                    res.status(200).json({
                        message: `Event ${reaction.name}`,
                        success: true,
                        reactioned: true
                    })
                }
            } else {
                res.status(404).json({
                    message: 'The reaction dont exist in the itinerary',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params

        try {
            let response = await Reaction.findOneAndUpdate({ _id: id }, { $pull: [{ userId: req.user.id }] }, { new: true })
            res.status(200).json({
                response,
                message: `reaction deleted`,
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

}

module.exports = controller