const ownerRepository = require('../repository/owners')

class OwnerService {
    constructor() {}

    async getOwners() {
        return await ownerRepository.getOwners()
    }

    // async createOwner(owner) {
    //     return await ownerRepository.createOwner(owner)
    // }

    // async updateOwner(owner) {
    //     return await ownerRepository.updateOwner(owner)
    // }

    // async deleteOwner(ownerId) {
    //     return await ownerRepository.deleteOwners(ownerId)
    // }
}

module.exports = new OwnerService()
