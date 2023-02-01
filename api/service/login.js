const loginRepository = require('../repository/login')

class LoginService {
    constructor() {}

    async loginUser(data) {
        return await loginRepository.loginUser(data)
    }
}

module.exports = new LoginService()
