const { connect } = require('../config/db')
const logger = require('../logger/logger')

class DoctorRepository {
    db = {}

    constructor() {
        this.db = connect()

        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.')
        // })
    }

    async getDoctors() {
        try {
            const doctors = await this.db.doctors.findAll()
            return doctors
        } catch (err) {
            return []
        }
    }

    async createDoctors(doctor) {
        let data = {}
        try {
            data = await this.db.doctors.create(doctor)
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async updateDoctors(doctor) {
        let data = {}
        try {
            data = await this.db.doctors.update(
                { ...doctor },
                {
                    where: {
                        id: doctor.id,
                    },
                }
            )
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async deleteDoctors(doctorId) {
        let data = {}
        try {
            data = await this.db.doctors.destroy({
                where: {
                    id: doctorId,
                },
            })
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
        return { status: `${data.deletedCount > 0 ? true : false}` }
    }
}

module.exports = new DoctorRepository()
