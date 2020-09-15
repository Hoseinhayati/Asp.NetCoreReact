import React, { Component } from 'react';
import Axios from 'axios';

export class create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }


    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    onChangeDateStarted(event) {
        this.setState({
            dateStarted: event.target.value
        });
    }

    onChangeDateCompleted(event) {
        this.setState({
            dateCompleted: event.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let tripObject = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }
        Axios.post("api/Trip/AddTrip", tripObject).then(result => {
            history.push('trips');
        });
    }

    render() {
        return (
            <div className="trip-form">
                <h3>Add New Trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip Name:</label>
                        <input type="text" className="form-control" value={this.state.name}
                            onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Trip Description:</label>
                        <textarea type="text" className="form-control" value={this.state.description}
                            onChange={this.onChangeDescription}></textarea>
                    </div>
                    <div className="row">
                        <div className="col col-m-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Of Start:</label>
                                <input type="date" className="form-control" value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}></input>
                            </div>
                        </div>
                        <div className="col col-m-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Of Complition:</label>
                                <input type="date" className="form-control" value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}></input>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Trip" className="btn btn-success" />
                    </div>
                </form>
            </div>
        );
    }
}