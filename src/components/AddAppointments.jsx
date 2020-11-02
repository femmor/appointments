import React, { Component } from 'react';
import {FaPlus} from "react-icons/fa"

class AddAppointments extends Component {
    constructor() {
        super()

        this.state = {
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, [e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {petName, ownerName, aptDate, aptTime, aptNotes} = this.state
        let tempApt = {
            petName,
            ownerName,
            aptDate,
            aptTime,
            aptNotes
        }

        this.props.addAppointments(tempApt)

        this.setState({
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""
        })

        this.props.toggleForm()
    }

    render() {
        const {formDisplay, toggleForm} = this.props

        return (
            <>
                <div className={`card text-center my-5 ${formDisplay ? '' : 'add-appointment'}`}>
                    <div className="apt-add-heading card-header bg-primary text-white"
                        onClick={() => toggleForm()}
                    >
                        <FaPlus/> Add Appointment
                    </div>
                    <div className="card-body">
                        <form id="aptForm" noValidate onSubmit={this.handleSubmit}>
                        <div className="form-group form-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="petName"
                            readOnly
                            >
                            Pet Name
                            </label>
                            <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="petName"
                                placeholder="Pet's Name"
                                value={this.state.petName}
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="ownerName"
                            >
                            Pet Owner
                            </label>
                            <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="ownerName"
                                placeholder="Owner's Name"
                                value={this.state.ownerName}
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptDate"
                            >
                            Date
                            </label>
                            <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="aptDate"
                                id="aptDate"
                                value={this.state.aptDate}
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptTime"
                            >
                            Time
                            </label>
                            <div className="col-md-4">
                            <input
                                type="time"
                                className="form-control"
                                name="aptTime"
                                id="aptTime"
                                value={this.state.aptTime}
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                            Apt. Notes
                            </label>
                            <div className="col-md-10">
                            <textarea
                                className="form-control"
                                rows="4"
                                cols="50"
                                name="aptNotes"
                                id="aptNotes"
                                placeholder="Appointment Notes"
                                value={this.state.aptNotes}
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                            <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto"
                            >
                                Add Appointment
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
            </>
        );
    }
}

export default AddAppointments;
