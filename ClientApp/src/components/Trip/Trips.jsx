import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export class trips extends Component {

    constructor(props) {
        super(props);

        this.onUpdateTrip = this.onUpdateTrip.bind(this);
        this.onDeleteTrip=this.onDeleteTrip.bind(this);

        this.state =
        {
            trips: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateTripsData();
    }

    onUpdateTrip(id) {
        const { history } = this.props;
        history.push("/trips/update/" + id)
    }

    onDeleteTrip(id) {
        const { history } = this.props;
        history.push("/trips/delete/" + id)
    }

    populateTripsData() {
        axios.get("api/Trip/GetTrips").then(result => {

            console.log(result);

            const reponse = result.data;
            this.setState({
                trips: reponse,
                loading: false
            });
        });
    }

    renderAllTripsTable = (trips) => {
        return (
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                            <tr key={trip.id}>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                                <td>
                                    {trip.dateCompleted
                                        ? new Date(trip.dateCompleted).toISOString().slice(0, 10)
                                        : "-"}
                                </td>
                                <td>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => this.onUpdateTrip(trip.id)}>
                                            Update
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => this.onDeleteTrip(trip.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        )
    }


    render() {

        let content = this.state.loading ? (
            <p>
                <em>loading...</em>
            </p>

        ) : (
                this.renderAllTripsTable(this.state.trips)
            );

        return (
            <div>
                <h1>All Trips</h1>
                <p>You Can See All Trips</p>
                {content}
            </div>
        );
    }
}