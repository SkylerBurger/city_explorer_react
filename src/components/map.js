import React, {Component} from 'react'


class Map extends Component {
  
  render() {
    return (
      <>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyBiMH7O2iNamVUtrYMkRnEIO2nYhS_Ru-M`} alt="Map of search query." />
      </>
    );
  }
}

export default Map