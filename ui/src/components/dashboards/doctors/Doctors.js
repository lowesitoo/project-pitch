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

            <div className="container mx-auto sm:px-4 mrgnbtm">
                <div className="flex flex-wrap ">
                    <div className="pl-4 pr-4 md:w-full">
                        <CreateDoctor doctorCreated={doctorCreated} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto sm:px-4 mrgnbtm">
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
