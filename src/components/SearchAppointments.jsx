import React, { Component } from 'react';

class SearchAppointments extends Component {
    render() {
        const {orderBy, orderDir, aptDate} = this.props

        return (
            <>
                <div className="my-3">
                    <h3>Search Appointments</h3>
                </div>
                <div className="search-appointments row justify-content-center my-4">
                    <div className="col-md-6">
                    <div className="input-group">
                        <input
                        id="SearchApts"
                        type="text"
                        className="form-control"
                        aria-label="Search Appointments"
                        />
                        <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Sort by: <span className="caret" />
                        </button>

                        <div className="sort-menu dropdown-menu dropdown-menu-right">
                            <button className={`sort-by dropdown-item ${orderBy === 'petName' ? 'active' : ''}`} href="#">
                            Pet Name
                            </button>
                            <button className={`sort-by dropdown-item ${aptDate === 'aptDate' ? 'active' : ''}`} href="#">
                            Date
                            </button>
                            <button className={`sort-by dropdown-item ${orderBy === 'ownerName' ? 'active' : ''}`} href="#">
                            Owner
                            </button>
                            <div role="separator" className="dropdown-divider" />
                            <button className={`sort-by dropdown-item ${orderDir === 'asc' ? 'active' : ''}`} href="#">
                            Asc
                            </button>
                            <button className={`sort-by dropdown-item ${orderDir === 'desc' ? 'active' : ''}`} href="#">
                            Desc
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
            
        );
    }
}

export default SearchAppointments;
