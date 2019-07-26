import React, { Component } from 'react'

class DarkSky extends Component {

  render() {
    return (
      <>
        <div className="column-container">  
          <section>
            <h3>Results from the DarkSky API</h3>
            <ul>
              {this.props.darkSky.map(day => (
                <li>The forecast for {day.time} is: {day.forecast}</li>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default DarkSky