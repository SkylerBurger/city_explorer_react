import React, {Component} from 'react';
import superagent from "superagent"

import Header from './header.js'
import Map from './map.js'
import SearchForm from './search-form.js'
import SearchResults from './search-results.js'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      yelp_data: [],
      darkSky_data: [],
      movieDB_data: [],
      trails_data: [],
      events_data: []
    };
  }

  handleSearchSubmit = async query => {
    // Geocode
    let location_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/location?data=${query}`);
    this.setState({
      location: {
        search_query: query,
        formatted_query: location_results.body.formatted_query,
        latitude: location_results.body.latitude,
        longitude: location_results.body.longitude
      }
    });
    
    
    let query_data = `?data[search_query]=${this.state.location.search_query}&data[formatted_query]=${this.state.location.formatted_query}&data[latitude]=${this.state.location.latitude}&data[longitude]=${this.state.location.longitude}`

    let darkSky_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/weather${query_data}`)

    let yelp_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/yelp${query_data}`)

    let eventbrite_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/events${query_data}`)

    let moviedb_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/movies${query_data}`)

    let trails_results = await superagent.get(`https://pythonic-city-explorer.onrender.com/trails${query_data}`)


    this.setState({
      darkSky_data: darkSky_results.body,
      yelp_data: yelp_results.body,
      events_data: eventbrite_results.body,
      movieDB_data: moviedb_results.body,
      trails_data: trails_results.body
    })

  }

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSubmit={this.handleSearchSubmit}/>
        {this.state.location && (
          <>
          <Map location={this.state.location}/>
          <SearchResults  darkSky={this.state.darkSky_data}
                          yelp={this.state.yelp_data}
                          events={this.state.events_data}
                          movies={this.state.movieDB_data}
                          trails={this.state.trails_data}/>
          </>
        )}
      </>
    );
  }
}

export default App;