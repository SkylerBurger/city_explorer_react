import React, { Component } from 'react'

class DarkSky extends Component {

  render() {
    return (
      <>
      <h2>Results from the DarkSky API</h2>
        {this.props.darkSky.map(day => (
          <li>The forecast for {day.time} is: {day.forecast}</li>
        ))}
      </>
    );
  }
}

export default DarkSky