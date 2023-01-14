const userService = require('../service/pets')
const logger = require('../logger/logger')

class PetsController {
    async getPets() {
        logger.info('Controller: getPets')
        return await userService.getPets()
    }

    async createPets(user) {
        logger.info('Controller: createPets', user)
        console.log('this is the user from the controller', user)
        return await userService.createPets(user)
    }

    async updatePets(user) {
        logger.info('Controller: updatePets', user)
        console.log('this is the user from the controller', user)
        return await userService.updatePets(user)
    }

    async deletePets(userId) {
        logger.info('Controller: deletePets', userId)
        return await userService.deletePets(userId)
    }
}
module.exports = new PetsController()
