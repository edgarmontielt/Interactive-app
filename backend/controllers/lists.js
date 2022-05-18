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
            const data = req.body
            const newTodo = {
                title: data.title,
                description: data.description,
                importance: data.importance,
                status: false
            }
            const result = await lists.create(newTodo)
            return res.json(result)
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTodo(req, res) {
        try {
            const result = await lists.findByIdAndDelete(req.params.id)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ListController