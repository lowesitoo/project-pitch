const userService = require('../service/vaccines')
const logger = require('../logger/logger')

class VaccinesController {
    async getVaccines() {
        logger.info('Controller: getVaccines')
        return await userService.getVaccines()
    }

    async createVaccines(user) {
        logger.info('Controller: createVaccines', user)

        return await userService.createVaccines(user)
    }

    async updateVaccines(user) {
        logger.info('Controller: updateVaccines', user)
        console.log('this is the user from the controller', user)
        return await userService.updateVaccines(user)
    }

    async deleteVaccines(userId) {
        logger.info('Controller: deleteVaccines', userId)
        return await userService.deleteVaccines(userId)
    }
}
module.exports = new VaccinesController()
