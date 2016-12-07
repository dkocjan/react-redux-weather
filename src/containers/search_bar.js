import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  // Prevent sending html form and refreshing page
  onFormSubmit(event) {
    event.preventDefault();

    // todo: request to weather api
  }

  render() {
    return (
      <div onSubmit={ this.onFormSubmit } className="col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <form className="input-group">
          <input
            placeholder="Enter city to get a forecast!"
            className="form-control"
            value={ this.state.term }
            onChange={ this.onInputChange } />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}