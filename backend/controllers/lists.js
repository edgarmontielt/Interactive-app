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
            console.log(result);
            return result
        } catch (error) {
            console.log(error);
        }
    }

    async updateTodo(req, res) {
        try {
            const result = await lists.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(result)
        } catch (error) {
            console.log(error);
        }
    }

    async updateStatus(req, res) {
        try {
            const { status } = await lists.findOne({ _id: req.params.id })
            if (!status) {
                const result = await lists.updateOne({ _id: req.params.id }, { $set: { status: true } })
                return res.json(result)
            }

            const result = await lists.updateOne({ _id: req.params.id }, { $set: { status: false } })
            return res.json(result)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ListController