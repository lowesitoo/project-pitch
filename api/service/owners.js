const ownerRepository = require('../repository/owners')

class OwnerService {
    constructor() {}

    async getOwners() {
        return await ownerRepository.getOwners()
    }

    async createOwners(owner) {
        return await ownerRepository.createOwners(owner)
    }

    async updateOwners(owner) {
        return await ownerRepository.updateOwners(owner)
    }

    async deleteOwners(ownerId) {
        return await ownerRepository.deleteOwners(ownerId)
    }
}

module.exports = new OwnerService()
