const userService = require('../service/doctors')
const logger = require('../logger/logger')

class DoctorsController {
    async getDoctors() {
        logger.info('Controller: getDoctors')
        return await userService.getDoctors()
    }

    async createDoctors(user) {
        logger.info('Controller: createDoctors', user)
        return await userService.createDoctors(user)
    }

    async updateDoctors(user) {
        logger.info('Controller: updateDoctors', user)
        return await userService.updateDoctors(user)
    }

    async deleteDoctors(userId) {
        logger.info('Controller: deleteDoctors', userId)
        return await userService.deleteDoctors(userId)
    }
}
module.exports = new DoctorsController()
