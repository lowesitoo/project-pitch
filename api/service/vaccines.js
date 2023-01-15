const vaccineRepository = require('../repository/vaccines')

class VaccineService {
    constructor() {}

    async getVaccines() {
        return await vaccineRepository.getVaccines()
    }

    async createVaccines(vaccine) {
        return await vaccineRepository.createVaccines(vaccine)
    }

    async updateVaccines(vaccine) {
        return await vaccineRepository.updateVaccines(vaccine)
    }

    async deleteVaccines(vaccineId) {
        return await vaccineRepository.deleteVaccines(vaccineId)
    }
}

module.exports = new VaccineService()
