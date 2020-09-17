import React, { Component, Fragment } from "react";
import axios from "axios";

export class Delete extends Component {
  constructor(props) {
    super(props);

    this.cancelDelete = this.cancelDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);

    this.state = {
      name: "",
      description: "",
      dateStarted: null,
      dateCompleted: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("api/Trip/SingleTrip/" + id).then(trip => {
      const response = trip.data;

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

  cancelDelete(event) {
    const { history } = this.props;
    history.push("/trips/alltrip");
  }

  confirmDelete(event) {
    const { id } = this.props.match.params;
    const { history } = this.props;

    axios.delete("api/trip/DeleteTrip/" + id).then(result => {
      history.push("/trips/alltrip");
    });
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "10px" }}></div>
        <h2>Delete Trip :</h2>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{this.state.name}</h4>
            <p className="card-text">{this.state.description}</p>
            <button onClick={this.cancelDelete} className="btn btn-default">
              Cancel
            </button>
            <button onClick={this.confirmDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
