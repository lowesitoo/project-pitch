const { connect } = require('../config/db')
const logger = require('../logger/logger')

class OwnerRepository {
    db = {}

    constructor() {
        this.db = connect()

        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.')
        // })
    }

    async getOwners() {
        try {
            const owners = await this.db.owners.findAll()
            // console.log('owners:::', owners)
            return owners
        } catch (err) {
            // console.log(err)
            return []
        }
    }

    async createOwners(owner) {
        let data = {}
        try {
            console.log('this is the user from the controller', owner)
            // owner.createdate = new Date().toISOString()
            data = await this.db.owners.create(owner)
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async updateOwners(owner) {
        let data = {}
        try {
            // owner.updateddate = new Date().toISOString()
            data = await this.db.owners.update(
                { ...owner },
                {
                    where: {
                        id: owner.id,
                    },
                }
            )
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async deleteOwners(ownerId) {
        let data = {}
        try {
            data = await this.db.owners.destroy({
                where: {
                    id: ownerId,
                },
            })
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
        return { status: `${data.deletedCount > 0 ? true : false}` }
    }
}

module.exports = new OwnerRepository()
