import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export class trips extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            trips: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateTripsData();
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
                                <td>{new Date(trip.dateStarted).toLocaleDateString()}
                                </td>
                                <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString(): '-'}
                                </td>
                                <td> - </td>
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