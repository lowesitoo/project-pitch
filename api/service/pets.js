const petRepository = require('../repository/pets')

class PetService {
    constructor() {}

    async getPets() {
        return await petRepository.getPets()
    }

    async createPets(pet) {
        return await petRepository.createPets(pet)
    }

    async updatePets(pet) {
        return await petRepository.updatePets(pet)
    }

    async deletePets(petId) {
        return await petRepository.deletePets(petId)
    }
}

module.exports = new PetService()
