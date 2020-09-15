import React, { Component } from 'react';

export class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            description : '',
            dateStarted : null,
            dateCompleted : null
        }
    }

    render() {
        return (
            <div className="trip-form">
                <h3>Add New Trip</h3>
                <form>
                    <div className="form-group">
                        <label>Trip Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Trip Description:</label>
                        <textarea type="text" className="form-control"></textarea>
                    </div>
                    <div className="row">
                        <div className="col col-m-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Of Start:</label>
                                <input type="date" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col col-m-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Of Complition:</label>
                                <input type="date" className="form-control"></input>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Trip" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        );
    }
}