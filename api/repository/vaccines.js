const { connect } = require('../config/db')
const logger = require('../logger/logger')

class VaccineRepository {
    db = {}

    constructor() {
        this.db = connect()

        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.')
        // })
    }

    async getVaccines() {
        try {
            const vaccines = await this.db.vaccines.findAll()
            return vaccines
        } catch (err) {
            return []
        }
    }

    async createVaccines(vaccine) {
        let data = {}
        try {
            data = await this.db.vaccines.create(vaccine)
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async updateVaccines(vaccine) {
        let data = {}
        try {
            data = await this.db.vaccines.update(
                { ...vaccine },
                {
                    where: {
                        id: vaccine.id,
                    },
                }
            )
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async deleteVaccines(vaccineId) {
        let data = {}
        try {
            data = await this.db.vaccines.destroy({
                where: {
                    id: vaccineId,
                },
            })
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
        return { status: `${data.deletedCount > 0 ? true : false}` }
    }
}

module.exports = new VaccineRepository()
