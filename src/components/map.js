import React, { Fragment, Component } from 'react'

// https://maps.googleapis.com/maps/api/staticmap?center={LATITUDE}%2c%20{LONGITUDE}&zoom=13&size=600x300&maptype=roadmap&key={GEOCODE_API_KEY}

class Map extends Component {
  
  render() {
    return (
      <Fragment>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.lat}%2c%20${this.props.long}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCJPXoebcN6HttkJ-sUdKUXuyL5YtetDAA`} alt="Map of search query." />
      </Fragment>
    );
  }
}

export default Map