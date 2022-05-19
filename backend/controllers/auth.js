const user = require("../models/user")

class Auth {
    async login(req, res) {
        const data = req.body
        try {
            const userFound = await user.findOne({ email: data.email })
            console.log(userFound);

            if (userFound) {
                if (userFound.password !== data.password) return res.status(402).json({ message: 'Invalid credentials' })
                
                req.session.logged = true
                req.session.user = {
                    idUser: userFound._id
                }
                return res.json({ message: 'Logged', session: req.session })
            }

            return res.status(402).json({ message: 'User not found' })

        } catch (error) {
            console.log(error);
        }
    }

    async signup(req, res) {
        const data = req.body
        console.log(data);
        try {
            const userFound = await user.findOne({ email: data.email })
            if (userFound) return res.status(403).json({ message: 'User already exists' })
            const result = await user.create(data)
            return res.json(result)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Auth