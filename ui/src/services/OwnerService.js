export async function getAllOwners() {
    const response = await fetch('/api/owners')
    return await response.json()
}

export async function createOwner(data) {
    const response = await fetch(`/api/owners`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner: data }),
    })
    return await response.json()
}

export async function deleteOwner(ownerId) {
    const response = await fetch(`/api/owners/${ownerId}`, { method: 'DELETE' })
    return await response.json()
}

export async function editOwner(data) {
    const response = await fetch(`/api/owners`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner: data }),
    })
    return await response.json()
}

export async function fetchSettings() {
    const response = await fetch('/api/settings')
    return await response.json()
}
