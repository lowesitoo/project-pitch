import React, { useState, useEffect } from 'react'

import {
    getAllPets,
    deletePet,
    fetchSettings,
} from '../../../services/PetService'

// import { getAllPets } from '../services/PetService'
import PetsTable from './PetsTable'
import Header from '../../Header'
import CreatePet from './CreatePet'

function Pets() {
    const [pets, setPets] = useState([])
    const [numberOfPets, setNumberOfPets] = useState([])
    const [isPetEdited, setPetEdited] = useState(false)

    useEffect(() => {
        getAllPets().then((pets) => {
            // console.log(pets)
            setPets(pets)
        })
    }, [numberOfPets, isPetEdited])

    function delPet(petId) {
        deletePet(petId).then((response) => {
            // console.log(response)
            setNumberOfPets(numberOfPets - 1)
        })
    }

    function petCreated() {
        setNumberOfPets(numberOfPets + 1)
    }

    function petEdited(res) {
        setPetEdited(res)
    }

    return (
        <div className="App">
            <Header />

            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-12">
                        <CreatePet petCreated={petCreated} />
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                <PetsTable
                    pets={pets}
                    deletePet={delPet}
                    petEdited={petEdited}
                />
            </div>
        </div>
    )
}

export default Pets
