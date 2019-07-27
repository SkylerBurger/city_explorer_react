import React, { Component } from 'react';
import DarkSky from './darkSky';
import Yelp from './yelp';
import Events from './events'
import Movies from './movies'
import Trails from './trails'

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="column-container">
        <DarkSky darkSky={this.props.darkSky}/>
        <Yelp yelp={this.props.yelp}/>
        <Events events={this.props.events}/>
        <Movies movies={this.props.movies}/>
        <Trails trails={this.props.trails}/>
      </div>
    )
  }
}

export default SearchResults