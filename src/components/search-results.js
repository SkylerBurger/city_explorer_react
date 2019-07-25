import React, { Component } from 'react'
import DarkSky from './darkSky';

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <DarkSky darkSky={this.props.darkSky} />
      </>
    )
  }
}

export default SearchResults