import React from 'react'
import { useForm } from 'react-hook-form'
import { createOwner } from '../services/OwnerService'

export default function CreateOwner(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createOwner(data).then((response) => {
            props.ownerCreated()
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
                                    Username
                                </label>
                                <input
                                    {...register('username')}
                                    placeholder="Create your username"
                                    className="form-control"
                                    name="username"
                                    id="username"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPet">
                                    Password
                                </label>
                                <input
                                    {...register('password')}
                                    placeholder="Password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmailAddress">
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    placeholder="Email Address"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPet">Pet</label>
                            <input
                                {...register('pet')}
                                placeholder="Pet"
                                className="form-control"
                                name="pet"
                                id="pet"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputMobileNumber">
                                Mobile Number
                            </label>
                            <input
                                {...register('mobile_num')}
                                placeholder="Mobile Number"
                                className="form-control"
                                name="mobile_num"
                                id="mobile_num"
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
