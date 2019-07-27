import React, {Component} from 'react'


class Map extends Component {
  
  render() {
    return (
      <>
        <img id="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyBiMH7O2iNamVUtrYMkRnEIO2nYhS_Ru-M`} alt="Map of search query." />
        <h2 className="query-placeholder">{`Here are the results for ${this.props.location.formatted_query}`}</h2>
      </>
    );
  }
}

export default Map