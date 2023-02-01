const { connect } = require('../config/db')
const logger = require('../logger/logger')
const owners = require('../model/owners')

class LoginRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql

    // https://medium.com/@jgrisafe/custom-user-authentication-with-express-sequelize-and-bcrypt-667c4c0edef5

    async loginUser(data) {
        const { email, password } = data

        // if the username / password is missing, we use status code 400
        // indicating a bad request was made and send back a message
        if (!email || !password) {
            return res
                .status(400)
                .send('Request missing email or password param')
        }

        try {
            const select = db.query(
                'SELECT * FROM owners WHERE email = email && password = password'
            )
            console.log('this is the user', select)
            console.log(data)
            // let user = await owners.authenticate(email, password)
            // const owner = await this.db.owner.find('email')

            // const authenticated = bcrypt.compare(password, owner.fromDB)

            // if (authenticated) {
            //     return res.status(200)
            // }

            // return res.status(400).send('Failed to Login')

            return res.status(200)
        } catch (err) {
            return res.status(400).send('Invalid email or password')
        }
    }
}

module.exports = new LoginRepository()
