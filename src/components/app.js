import React, {Component} from 'react';
import superagent from "superagent"

import Header from './header.js'
import Map from './map.js'
import SearchForm from './search-form.js'
import DarkSky from './darkSky.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        search_query: '',
        formatted_query: '',
        latitude: '',
        longitude: ''
      },
      yelp_data: [],
      darkSky_data: [],
      movieDB_data: [],
      trails_data: [],
      events_data: []
    };
  }

  handleSearchSubmit = async query => {
    // Geocode
    let location_results = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${query}`);
    await this.setState({
      location: {
        search_query: query,
        formatted_query: location_results.body.formatted_query,
        latitude: location_results.body.latitude,
        longitude: location_results.body.longitude
      }
    });
    
    
    let query_data = `?data[search_query]=${this.state.location.search_query}&data[formatted_query]=${this.state.location.formatted_query}&data[latitude]=${this.state.location.latitude}&data[longitude]=${this.state.location.longitude}`

    // DarkSky
    let darkSky_results = await superagent.get(`https://city-explorer-backend.herokuapp.com/weather${query_data}`)


    this.setState({
      darkSky_data: darkSky_results.body
    })

  }

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSubmit={this.handleSearchSubmit}/>
        <Map location={this.state.location}/>
        <DarkSky weather={this.state.darkSky_data} />
      </>
    );
  }
}

export default App;

// https://city-explorer-backend.herokuapp.com/