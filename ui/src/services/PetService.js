export async function getAllPets() {
    const response = await fetch('/api/pets')
    return await response.json()
}

export async function createPet(data) {
    const response = await fetch(`/api/pets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pet: data }),
    })
    return await response.json()
}

export async function deletePet(petId) {
    const response = await fetch(`/api/pets/${petId}`, { method: 'DELETE' })
    return await response.json()
}

export async function editPet(data) {
    const response = await fetch(`/api/pets`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pet: data }),
    })
    return await response.json()
}

export async function fetchSettings() {
    const response = await fetch('/api/settings')
    return await response.json()
}
