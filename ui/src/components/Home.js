import React from 'react'
import Splash from './Splash'
import Login from './authentication/Login'
import Pets from './dashboards/Pets'

function Home() {
    const isLoading = false
    const isAuthenticated = false
    const getAuthenticatedDashboard = () => {
        return <div>{isAuthenticated ? <Pets /> : <Login />}</div>
    }
    return <div>{isLoading ? <Splash /> : getAuthenticatedDashboard()}</div>
}

export default Home
