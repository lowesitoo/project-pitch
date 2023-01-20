export async function LoginUser(data) {
    console.log('this is the 100 data', data)
    const response = await fetch(`/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    })
    return await response.json()
}
