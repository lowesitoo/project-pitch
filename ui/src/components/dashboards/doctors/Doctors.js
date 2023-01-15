import React, { useState, useEffect } from 'react'

import {
    getAllDoctors,
    deleteDoctor,
    fetchSettings,
} from '../../../services/DoctorService'

// import { getAllDoctors } from '../services/DoctorService'
import DoctorsTable from './DoctorsTable'
import Header from '../../Header'
import CreateDoctor from './CreateDoctor'

function Doctors() {
    const [doctors, setDoctors] = useState([])
    const [numberOfDoctors, setNumberOfDoctors] = useState([])
    const [isDoctorEdited, setDoctorEdited] = useState(false)

    useEffect(() => {
        getAllDoctors().then((doctors) => {
            // console.log(doctors)
            setDoctors(doctors)
        })
    }, [numberOfDoctors, isDoctorEdited])

    function delDoctor(doctorId) {
        deleteDoctor(doctorId).then((response) => {
            // console.log(response)
            setNumberOfDoctors(numberOfDoctors - 1)
        })
    }

    function doctorCreated() {
        setNumberOfDoctors(numberOfDoctors + 1)
    }

    function doctorEdited(res) {
        setDoctorEdited(res)
    }

    return (
        <div className="App">
            <Header />

            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-12">
                        <CreateDoctor doctorCreated={doctorCreated} />
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                <DoctorsTable
                    doctors={doctors}
                    deleteDoctor={delDoctor}
                    doctorEdited={doctorEdited}
                />
            </div>
        </div>
    )
}

export default Doctors
