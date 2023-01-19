const { connect } = require('../config/db')
const logger = require('../logger/logger')

class PetRepository {
    db = {}

    constructor() {
        this.db = connect()

        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.')
        // })
    }

    async getPets() {
        try {
            const pets = await this.db.pets.findAll()
            console.log('pets:::', pets)

            return pets
        } catch (err) {
            return []
        }
    }

    async createPets(pet) {
        let data = {}
        try {
            data = await this.db.pets.create(pet)
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async updatePets(pet) {
        let data = {}
        try {
            data = await this.db.pets.update(
                { ...pet },
                {
                    where: {
                        id: pet.id,
                    },
                }
            )
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
    }

    async deletePets(petId) {
        let data = {}
        try {
            data = await this.db.pets.destroy({
                where: {
                    id: petId,
                },
            })
        } catch (err) {
            logger.error('Error::' + err)
        }
        return data
        return { status: `${data.deletedCount > 0 ? true : false}` }
    }
}

module.exports = new PetRepository()
