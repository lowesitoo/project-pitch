import React from 'react'
import { useForm } from 'react-hook-form'
import { createPet } from '../../../services/PetService'

export default function CreatePet(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createPet(data).then((response) => {
            props.petCreated()
            e.target.reset()
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>Add Pet Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputUsername">
                                    Name
                                </label>
                                <input
                                    {...register('name')}
                                    placeholder="Enter pet name"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPet">Breed</label>
                                <input
                                    {...register('breed')}
                                    placeholder="Breed"
                                    className="form-control"
                                    name="breed"
                                    id="breed   "
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmailAddress">
                                    Doctor
                                </label>
                                <input
                                    {...register('primary_doctor')}
                                    placeholder="Enter your Veterinarian"
                                    className="form-control"
                                    type="primary_doctor"
                                    name="primary_doctor"
                                    id="primary_doctor"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPet">Clinic</label>
                            <input
                                {...register('clinic')}
                                placeholder="clinic"
                                className="form-control"
                                name="clinic"
                                id="clinic"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputMobileNumber">
                                Vaccine History
                            </label>
                            <input
                                {...register('vaccine_history')}
                                placeholder="Vaccine History "
                                className="form-control"
                                name="vaccine_history"
                                id="vaccine_history"
                                required
                            />
                        </div>

                        <input
                            type="submit"
                            className="btn btn-danger mrgnbtm"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
