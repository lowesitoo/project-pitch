export async function getAllDoctors() {
    const response = await fetch('/api/doctors')
    return await response.json()
}

export async function createDoctor(data) {
    const response = await fetch(`/api/doctors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctor: data }),
    })
    return await response.json()
}

export async function deleteDoctor(doctorId) {
    const response = await fetch(`/api/doctors/${doctorId}`, {
        method: 'DELETE',
    })
    return await response.json()
}

export async function editDoctor(data) {
    const response = await fetch(`/api/doctors`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctor: data }),
    })
    return await response.json()
}

export async function fetchSettings() {
    const response = await fetch('/api/settings')
    return await response.json()
}
