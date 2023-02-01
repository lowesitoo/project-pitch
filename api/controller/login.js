const loginService = require('../service/login')
const logger = require('../logger/logger')

class LoginController {
    async loginUser(data) {
        logger.info('Controller: loginUser')
        return await loginService.loginUser(data)
    }
}
module.exports = new LoginController()
