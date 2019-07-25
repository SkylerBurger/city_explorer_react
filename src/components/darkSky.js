import React, { Component } from 'react'

class DarkSky extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.lat,
      longitude: this.props.long
    }
  }
  render() {
    return (
      <>
      <h2>Results from the DarkSky API</h2>
        {this.props.weather.map(day => (
          <li>The forecast for {day.time} is: {day.forecast}</li>
        ))}
      </>
    );
  }
}

export default DarkSky