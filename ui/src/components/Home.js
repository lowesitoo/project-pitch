import React from 'react'
import Splash from './Splash'
import Login from './authentication/Login'
import Pets from './dashboards/Pets'

function Home({ isAuthenticated, setIsAuthenticated }) {
    return (
        <div>
            {isAuthenticated ? (
                <Pets />
            ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
            )}
        </div>
    )
}

export default Home
