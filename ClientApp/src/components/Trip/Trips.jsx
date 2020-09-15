import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export class trips extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            trips: [],
            loading: false
        };
    }

    componentDidMount(){
        this.populateTripsData();
    }

    populateTripsData(){

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
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td> - </td>
                        </tr>
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