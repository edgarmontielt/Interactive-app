const lists = require("../models/lists")

class ListController {

    async getAll(req, res) { 
        try {
            const result = await lists.find()
            return res.json(result)
        } catch (error) {
            
        }
    }

    async create(req, res) {
        try {
            console.log(req.body);
            const result = await lists.create(req.body)
            return res.json(result)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ListController