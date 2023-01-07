const userService = require('../service/owners')
const logger = require('../logger/logger')

class OwnersController {
    async getOwners() {
        logger.info('Controller: getOwners')
        return await userService.getOwners()
    }

    // async createOwners(user) {
    //     logger.info('Controller: createOwners', user)
    //     return await userService.createUser(user)
    // }

    // async updateUser(user) {
    //     logger.info('Controller: updateUser', user)
    //     return await userService.updateUser(user)
    // }

    // async deleteUser(userId) {
    //     logger.info('Controller: deleteUser', userId)
    //     return await userService.deleteUser(userId)
    // }
}
module.exports = new OwnersController()
