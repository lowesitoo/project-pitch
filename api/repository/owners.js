const { connect } = require('../config/db')
const logger = require('../logger/logger')

class OwnerRepository {
    db = {}

    constructor() {
        this.db = connect()
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.')
        // })
    }

    async getOwners() {
        try {
            const owners = await this.db.owners.findAll()
            console.log('owners:::', owners)
            return owners
        } catch (err) {
            console.log(err)
            return []
        }
    }

    // async createOwner(owner) {
    //     let data = {}
    //     try {
    //         owner.createdate = new Date().toISOString()
    //         data = await this.db.owner.create(owner)
    //     } catch (err) {
    //         logger.error('Error::' + err)
    //     }
    //     return data
    // }

    // async updateOwner(owner) {
    //     let data = {}
    //     try {
    //         owner.updateddate = new Date().toISOString()
    //         data = await this.db.owner.update(
    //             { ...owner },
    //             {
    //                 where: {
    //                     id: owner.id,
    //                 },
    //             }
    //         )
    //     } catch (err) {
    //         logger.error('Error::' + err)
    //     }
    //     return data
    // }

    // async deleteOwner(ownerId) {
    //     let data = {}
    //     try {
    //         data = await this.db.owner.destroy({
    //             where: {
    //                 id: ownerId,
    //             },
    //         })
    //     } catch (err) {
    //         logger.error('Error::' + err)
    //     }
    //     return data
    //     return { status: `${data.deletedCount > 0 ? true : false}` }
    // }
}

module.exports = new OwnerRepository()
