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

            <div className="container mx-auto sm:px-4 mrgnbtm">
                <div className="flex flex-wrap ">
                    <div className="pl-4 pr-4 md:w-full">
                        <CreatePet petCreated={petCreated} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto sm:px-4 mrgnbtm">
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
