import React from 'react'
import { useForm } from 'react-hook-form'
import { createVaccine } from '../../../services/VaccineService'

export default function CreateVaccine(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createVaccine(data).then((response) => {
            props.vaccineCreated()
            e.target.reset()
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>Add Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputUsername">
                                    Brand
                                </label>
                                <input
                                    {...register('brand')}
                                    placeholder="Enter vaccine brand"
                                    className="form-control"
                                    name="brand"
                                    id="brand"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputUsername">
                                    Name
                                </label>
                                <input
                                    {...register('name')}
                                    placeholder="Enter your Name"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
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
