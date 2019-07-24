import React, { Fragment, Component } from 'react';

import Header from './header.js'
import Map from './map.js'
import SearchForm from './search-form.js'
import Result from './result.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search_query: '',
      formatted_query: '',
      latitude: '',
      longitude: ''
    }
  }

  handleSearchSubmit = query => {
    alert(query);
  }

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSubmit={this.handleSearchSubmit}/>
        <Map />
        <Result />
      </>
    );
  }
}

export default App;