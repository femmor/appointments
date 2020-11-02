import React, { Component } from 'react';

class ListAppointments extends Component {
    render() {
        const {appointments} = this.props
        // Get the appointments from the state
        const listApts = appointments.map(item => {
            const {aptDate, aptNotes, ownerName, petName} = item
            return (
                <div>{petName}</div>
            )
        })
        return (
            <div>
                <p>{listApts}</p>
            </div>
        );
    }
}

export default ListAppointments;
