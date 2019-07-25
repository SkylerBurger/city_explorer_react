import React, { Fragment, Component } from 'react';
import superagent from "superagent"

import Header from './header.js'
import Map from './map.js'
import SearchForm from './search-form.js'
import Result from './result.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
      formatted_query: '',
      latitude: '',
      longitude: ''
    }
  }

  handleSearchSubmit = async query => {
    await this.setState({
      search_query: query
    })
    let results = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${query}`);
    this.setState({
      formatted_query: results.body.formatted_query,
      latitude: results.body.latitude,
      longitude: results.body.longitude
    });
  }

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSubmit={this.handleSearchSubmit}/>
        <Map api_key={this.state.api_key} lat={this.state.latitude} long={this.state.longitude}/>
        <Result />
      </>
    );
  }
}

export default App;