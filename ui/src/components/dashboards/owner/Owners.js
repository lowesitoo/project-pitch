import React, { useState, useEffect } from 'react'

import {
    getAllOwners,
    deleteOwner,
    fetchSettings,
} from '../../../services/OwnerService'

import OwnersTable from './OwnersTable'
import Header from '../../Header'
import CreateOwner from './CreateOwner'

function Owners() {
    const [owners, setOwners] = useState([])
    const [numberOfOwners, setNumberOfOwners] = useState([])
    const [isOwnerEdited, setOwnerEdited] = useState(false)

    useEffect(() => {
        getAllOwners().then((owners) => {
            // console.log(owners)
            setOwners(owners)
        })
    }, [numberOfOwners, isOwnerEdited])

    function delOwner(ownerId) {
        deleteOwner(ownerId).then((response) => {
            // console.log(response)
            setNumberOfOwners(numberOfOwners - 1)
        })
    }

    function ownerCreated() {
        setNumberOfOwners(numberOfOwners + 1)
    }

    function ownerEdited(res) {
        setOwnerEdited(res)
    }

    return (
        <div className="App">
            <Header />

            <div className="container mx-auto sm:px-4 mrgnbtm">
                <div className="flex flex-wrap ">
                    <div className="pl-4 pr-4 md:w-full">
                        <CreateOwner ownerCreated={ownerCreated} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto sm:px-4 mrgnbtm">
                <OwnersTable
                    owners={owners}
                    deleteOwner={delOwner}
                    ownerEdited={ownerEdited}
                />
            </div>
        </div>
    )
}

export default Owners
