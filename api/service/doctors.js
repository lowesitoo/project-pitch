const doctorRepository = require('../repository/doctors')

class DoctorService {
    constructor() {}

    async getDoctors() {
        return await doctorRepository.getDoctors()
    }

    async createDoctors(doctor) {
        return await doctorRepository.createDoctors(doctor)
    }

    async updateDoctors(doctor) {
        return await doctorRepository.updateDoctors(doctor)
    }

    async deleteDoctors(doctorId) {
        return await doctorRepository.deleteDoctors(doctorId)
    }
}

module.exports = new DoctorService()
