import React, { Component } from 'react';
import Axios from 'axios';

export class update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.updateCancel = this.updateCancel.bind(this);
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


    componentDidMount() {
        const { id } = this.props.match.params;
        Axios.get("api/Trip/SingleTrip/" + id).then(result => {
            const response = result.data;
            this.setState({
                name: response.name,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
                dateCompleted: response.dateCompleted
                  ? new Date(response.dateCompleted).toISOString().slice(0, 10)
                  : null
            });
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        const { id } = this.props.match.params;

        let tripObject = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: new Date(this.state.dateStarted).toISOString(),
            dateCompleted: this.state.dateCompleted
              ? new Date(this.state.dateCompleted).toISOString()
              : null
        }
        Axios.put("api/Trip/UpdateTrip/" + id, tripObject).then(result => {
            history.push('/trips/alltrip');
        });
    }

    updateCancel() {
        const { history } = this.props;
        history.push("/trips/alltrip")
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
                        <button onClick={this.updateCancel} className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-success">Upate</button>
                    </div>
                </form>
            </div>
        );
    }
}