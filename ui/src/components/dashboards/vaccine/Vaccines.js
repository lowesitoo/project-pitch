import React, { useState, useEffect } from 'react'

import {
    getAllVaccines,
    deleteVaccine,
    fetchSettings,
} from '../../../services/VaccineService'

// import { getAllVaccines } from '../services/VaccineService'
import VaccinesTable from './VaccinesTable.js'
import Header from '../../Header'
import CreateVaccine from './CreateVaccine'

function Vaccines() {
    const [vaccines, setVaccines] = useState([])
    const [numberOfVaccines, setNumberOfVaccines] = useState([])
    const [isVaccineEdited, setVaccineEdited] = useState(false)

    useEffect(() => {
        getAllVaccines().then((vaccines) => {
            // console.log(vaccines)
            setVaccines(vaccines)
        })
    }, [numberOfVaccines, isVaccineEdited])

    function delVaccine(vaccineId) {
        deleteVaccine(vaccineId).then((response) => {
            // console.log(response)
            setNumberOfVaccines(numberOfVaccines - 1)
        })
    }

    function vaccineCreated() {
        setNumberOfVaccines(numberOfVaccines + 1)
    }

    function vaccineEdited(res) {
        setVaccineEdited(res)
    }

    return (
        <div className="App">
            <Header />

            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-12">
                        <CreateVaccine vaccineCreated={vaccineCreated} />
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                <VaccinesTable
                    vaccines={vaccines}
                    deleteVaccine={delVaccine}
                    vaccineEdited={vaccineEdited}
                />
            </div>
        </div>
    )
}

export default Vaccines
