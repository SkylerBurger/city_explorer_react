import React, { Fragment, Component } from 'react';

import Header from './header.js'
import Map from './map.js'
import Search from './search.js'
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

  render() {
    return (
      <>
        <Header />
        <Search />
        <Map />
        <Result />
      </>
    );
  }
}




export default App;