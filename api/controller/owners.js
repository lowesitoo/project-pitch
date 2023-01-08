const userService = require('../service/owners')
const logger = require('../logger/logger')

class OwnersController {
    async getOwners() {
        logger.info('Controller: getOwners')
        return await userService.getOwners()
    }
    // Assignment #1
    // Uncomment remaining crud

    async createOwners(user) {
        logger.info('Controller: createOwners', user)
        return await userService.createOwners(user)
    }

    async updateOwners(user) {
        logger.info('Controller: updateOwners', user)
        return await userService.updateOwners(user)
    }

    async deleteOwners(userId) {
        logger.info('Controller: deleteOwners', userId)
        return await userService.deleteOwners(userId)
    }
}
module.exports = new OwnersController()
