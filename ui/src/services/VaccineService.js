export async function getAllVaccines() {
    const response = await fetch('/api/vaccines')
    return await response.json()
}

export async function createVaccine(data) {
    const response = await fetch(`/api/vaccines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vaccine: data }),
    })
    return await response.json()
}

export async function deleteVaccine(vaccineId) {
    const response = await fetch(`/api/vaccines/${vaccineId}`, {
        method: 'DELETE',
    })
    return await response.json()
}

export async function editVaccine(data) {
    const response = await fetch(`/api/vaccines`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vaccine: data }),
    })
    return await response.json()
}

export async function fetchSettings() {
    const response = await fetch('/api/settings')
    return await response.json()
}
